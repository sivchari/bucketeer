import React, { FC, useEffect, memo, useState } from 'react';
import TagManager from 'react-gtm-module';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  useParams,
  useHistory
} from 'react-router-dom';

import { NotFound } from '../components/NotFound';
import { SideMenu } from '../components/SideMenu';
import { Toasts } from '../components/Toasts';
import { GOOGLE_TAG_MANAGER_ID } from '../config';
import {
  PAGE_PATH_ADMIN,
  PAGE_PATH_AUTH_CALLBACK,
  PAGE_PATH_EXPERIMENTS,
  PAGE_PATH_FEATURES,
  PAGE_PATH_FEATURE_CLONE,
  PAGE_PATH_GOALS,
  PAGE_PATH_APIKEYS,
  PAGE_PATH_USER_SEGMENTS,
  PAGE_PATH_USERS,
  PAGE_PATH_AUDIT_LOGS,
  PAGE_PATH_NEW,
  PAGE_PATH_ROOT,
  PAGE_PATH_ACCOUNTS,
  PAGE_PATH_SETTINGS,
  PAGE_PATH_AUTH_SIGNIN,
  PAGE_PATH_DEBUGGER
} from '../constants/routing';
import { AppState } from '../modules';
import {
  fetchMe,
  setCurrentEnvironment,
  useCurrentEnvironment,
  useIsEditable,
  useMe
} from '../modules/me';
import { fetchMyOrganizations } from '../modules/myOrganization';
import { Organization } from '../proto/environment/organization_pb';
import {
  getOrganizationId,
  setOrganizationId
} from '../storage/organizationId';
import { AppDispatch } from '../store';

import { AccountIndexPage } from './account';
import { AdminIndexPage } from './admin';
import { APIKeyIndexPage } from './apiKey';
import { AuditLogIndexPage } from './auditLog';
import { DebuggerIndexPage } from './debugger';
import { AuthCallbackPage } from './auth';
import Login from './auth/signin';
import SignIn from './auth/email';
import SelectOrganization from './auth/selectOrganization';
import { ExperimentIndexPage } from './experiment';
import { FeatureIndexPage } from './feature';
import { FeatureDetailPage } from './feature/detail';
import { GoalIndexPage } from './goal';
import { SegmentIndexPage } from './segment';
import { SettingsIndexPage } from './settings';
import { getToken } from '../storage/token';
import { switchOrganization } from '../modules/auth';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  organization_id: string;
}

export const App: FC = memo(() => {
  useEffect(() => {
    if (
      !window.location.href.includes('localhost') &&
      GOOGLE_TAG_MANAGER_ID.trim().length > 0
    ) {
      const tagManagerArgs = {
        gtmId: GOOGLE_TAG_MANAGER_ID
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path={PAGE_PATH_AUTH_CALLBACK}
          component={AuthCallbackPage}
        />
        <Route exact path={PAGE_PATH_AUTH_SIGNIN} component={SignIn} />
        <Route path={PAGE_PATH_ROOT} component={Root} />
      </Switch>
      <Toasts />
    </>
  );
});

export const Root: FC = memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const me = useMe();
  const myOrganization = useSelector<AppState, Organization.AsObject[]>(
    (state) => state.myOrganization.myOrganization
  );
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const history = useHistory();

  const token = getToken();
  const hasToken = token?.accessToken ? true : false;
  const [isInitialLoading, setIsInitialLoading] = useState(hasToken);

  const parsedToken: DecodedToken = token
    ? jwtDecode(token?.accessToken)
    : null;

  useEffect(() => {
    if (hasToken) {
      const organizationId = getOrganizationId();

      if (organizationId) {
        dispatch(fetchMe({ organizationId })).then(() =>
          setIsInitialLoading(false)
        );
      } else {
        dispatch(fetchMyOrganizations()).then((res) => {
          const organizationList = res.payload as Organization.AsObject[];
          // if there is only one organization, set it as the default organization
          if (organizationList.length === 1) {
            setOrganizationId(organizationList[0].id);
            dispatch(fetchMe({ organizationId: organizationList[0].id })).then(
              () => {
                setIsInitialLoading(false);
              }
            );
          } else {
            setIsInitialLoading(false);
          }
        });
      }
    }
  }, [hasToken]);

  const handleSubmit = () => {
    const { value: organizationId } = selectedOrganization;

    setOrganizationId(organizationId);

    const fetchUserData = () => {
      dispatch(fetchMe({ organizationId, shouldRefreshToken: false })).then(
        () => history.push(PAGE_PATH_ROOT)
      );
    };

    if (parsedToken.organization_id === organizationId) {
      fetchUserData();
    } else {
      dispatch(
        switchOrganization({ organizationId, accessToken: token.accessToken })
      ).then(fetchUserData);
    }
  };

  if (isInitialLoading) {
    return <div className="spinner mt-4 mx-auto" />;
  }

  if (me.isLogin) {
    return (
      <div className="flex flex-row w-full h-full bg-gray-100">
        <div className="flex-none w-64">
          <SideMenu />
        </div>
        <div className="flex-grow min-w-128 shadow-lg overflow-y-auto">
          <Switch>
            <Route path={PAGE_PATH_ADMIN} component={AdminRoot} />
            <Route path={'/:environmentUrlCode?'} component={EnvironmentRoot} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }

  if (hasToken && myOrganization.length > 1) {
    return (
      <SelectOrganization
        options={myOrganization.map((org) => ({
          label: org.name,
          value: org.id
        }))}
        onChange={(o) => setSelectedOrganization(o)}
        onSubmit={handleSubmit}
        isSubmitBtnDisabled={!selectedOrganization}
      />
    );
  }
  return <Login />;
});

export const AdminRoot: FC = memo(() => {
  const { url } = useRouteMatch();
  const me = useMe();
  return (
    <Switch>
      {!me.isAdmin && (
        <Route path={`${url}`}>
          <h3>403 Access denied</h3>
        </Route>
      )}
      <Route path={`${url}`}>
        <AdminIndexPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
});

export const EnvironmentRoot: FC = memo(() => {
  const editable = useIsEditable();
  const dispatch = useDispatch<AppDispatch>();
  const me = useMe();
  const currentEnvironment = useCurrentEnvironment();
  const { url } = useRouteMatch();
  const { environmentUrlCode } = useParams<{ environmentUrlCode: string }>();

  if (environmentUrlCode == undefined) {
    return (
      <Redirect
        to={`${PAGE_PATH_ROOT}${currentEnvironment.urlCode}${PAGE_PATH_FEATURES}`}
      />
    );
  }
  if (!me.isLogin) {
    return null;
  }
  const environmentRole = me.consoleAccount.environmentRolesList.find(
    (environmentRole) =>
      environmentRole.environment.urlCode === environmentUrlCode
  );
  if (!environmentRole) {
    return <NotFound />;
  }
  dispatch(setCurrentEnvironment(environmentRole.environment.id));

  return (
    <Switch>
      {!editable && (
        <Route exact path={[`${url}/:any${PAGE_PATH_NEW}`]}>
          <h3>403 Access denied</h3>
        </Route>
      )}
      <Route
        exact
        path={[
          `${url}${PAGE_PATH_FEATURES}`,
          `${url}${PAGE_PATH_FEATURES}${PAGE_PATH_NEW}`,
          `${url}${PAGE_PATH_FEATURES}${PAGE_PATH_FEATURE_CLONE}/:featureId`
        ]}
      >
        <FeatureIndexPage />
      </Route>
      <Route path={`${url}${PAGE_PATH_FEATURES}/:featureId`}>
        <FeatureDetailPage />
      </Route>
      <Route
        exact
        path={[
          `${url}${PAGE_PATH_EXPERIMENTS}`,
          `${url}${PAGE_PATH_EXPERIMENTS}/:experimentId`
        ]}
      >
        <ExperimentIndexPage />
      </Route>
      <Route
        exact
        path={[`${url}${PAGE_PATH_GOALS}`, `${url}${PAGE_PATH_GOALS}/:goalId`]}
      >
        <GoalIndexPage />
      </Route>
      <Route
        exact
        path={[
          `${url}${PAGE_PATH_APIKEYS}`,
          `${url}${PAGE_PATH_APIKEYS}/:apiKeyId`
        ]}
      >
        <APIKeyIndexPage />
      </Route>
      <Route
        exact
        path={[
          `${url}${PAGE_PATH_USER_SEGMENTS}`,
          `${url}${PAGE_PATH_USER_SEGMENTS}/:segmentId`
        ]}
      >
        <SegmentIndexPage />
      </Route>
      <Route exact path={[`${url}${PAGE_PATH_USERS}`]}>
        <div>
          <h3>Users</h3>
        </div>
      </Route>
      <Route exact path={[`${url}${PAGE_PATH_AUDIT_LOGS}`]}>
        <AuditLogIndexPage />
      </Route>
      <Route exact path={[`${url}${PAGE_PATH_DEBUGGER}`]}>
        <DebuggerIndexPage />
      </Route>
      <Route
        exact
        path={[
          `${url}${PAGE_PATH_ACCOUNTS}`,
          `${url}${PAGE_PATH_ACCOUNTS}/:accountId`
        ]}
      >
        <AccountIndexPage />
      </Route>
      <Route path={`${url}${PAGE_PATH_SETTINGS}`}>
        <SettingsIndexPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
});

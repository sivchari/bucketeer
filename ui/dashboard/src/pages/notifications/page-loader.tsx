import { useCallback, useEffect, useMemo, useState } from 'react';
import { Trans } from 'react-i18next';
import { notificationDelete, notificationUpdater } from '@api/notification';
import { useQueryNotification } from '@queries/notification-details';
import { invalidateNotifications } from '@queries/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getCurrentEnvironment, hasEditable, useAuth } from 'auth';
import { PAGE_PATH_NOTIFICATIONS } from 'constants/routing';
import { useToast } from 'hooks';
import useActionWithURL from 'hooks/use-action-with-url';
import { useToggleOpen } from 'hooks/use-toggle-open';
import { useTranslation } from 'i18n';
import { Notification } from '@types';
import { useSearchParams } from 'utils/search-params';
import ConfirmModal from 'elements/confirm-modal';
import NotificationCreateUpdateModal from './notification-modal/notification-create-update-modal';
import PageContent from './page-content';
import { NotificationActionsType } from './types';

const PageLoader = () => {
  const { t } = useTranslation(['table', 'message', 'common']);
  const queryClient = useQueryClient();
  const { notify, errorNotify } = useToast();
  const { consoleAccount } = useAuth();
  const currentEnvironment = getCurrentEnvironment(consoleAccount!);
  const editable = hasEditable(consoleAccount!);

  const commonPath = useMemo(
    () => `/${currentEnvironment.urlCode}${PAGE_PATH_NOTIFICATIONS}`,
    [currentEnvironment]
  );

  const {
    id: notificationId,
    isAdd,
    isEdit,
    onOpenAddModal,
    onOpenEditModal,
    onCloseActionModal
  } = useActionWithURL({
    closeModalPath: commonPath
  });

  const [isDisabling, setIsDisabling] = useState<boolean>(false);
  const [selectedNotification, setSelectedNotification] =
    useState<Notification>();
  const [openConfirmModal, onOpenConfirmModal, onCloseConfirmModal] =
    useToggleOpen(false);
  const [isDeleteNotification, setIsDeleteNotification] =
    useState<boolean>(false);

  const { searchOptions } = useSearchParams();
  const notificationEnvironmentId = searchOptions?.environmentId;
  const confirmTranslationKey = useMemo(
    () =>
      isDeleteNotification ? 'delete' : isDisabling ? 'disable' : 'enable',
    [isDeleteNotification, isDisabling]
  );

  const {
    data: notificationCollection,
    isLoading: isLoadingNotification,
    isError,
    error
  } = useQueryNotification({
    params: {
      id: notificationId as string,
      environmentId: notificationEnvironmentId as string
    },
    enabled: !!isEdit && !!notificationId && !selectedNotification
  });

  const onHandleActions = useCallback(
    (notification: Notification, type: NotificationActionsType) => {
      setSelectedNotification(notification);
      switch (type) {
        case 'EDIT':
          return onOpenEditModal(
            `${commonPath}/${notification.id}?environmentId=${notification.environmentId}`
          );
        case 'ENABLE':
        case 'DISABLE':
          setIsDisabling(type === 'DISABLE');
          return onOpenConfirmModal();
        case 'DELETE':
          setIsDeleteNotification(true);
          return onOpenConfirmModal();
        default:
          break;
      }
    },
    [commonPath]
  );

  const handleOnCloseModal = useCallback(() => {
    onCloseConfirmModal();
    setIsDeleteNotification(false);
    setSelectedNotification(undefined);
    onCloseActionModal();
  }, []);

  const mutationState = useMutation({
    mutationFn: async (notification: Notification) => {
      return isDeleteNotification
        ? await notificationDelete({
            id: notification.id,
            environmentId: notification.environmentId
          })
        : await notificationUpdater({
            id: notification.id,
            environmentId: notification.environmentId,
            disabled: isDisabling
          });
    },
    onSuccess: () => {
      handleOnCloseModal();
      invalidateNotifications(queryClient);
      mutationState.reset();
      notify({
        message: t('message:collection-action-success', {
          collection: t('common:notification'),
          action: t(isDeleteNotification ? 'common:deleted' : 'common:updated')
        })
      });
    },
    onError: error => errorNotify(error)
  });

  const onHandleConfirmSubmit = useCallback(() => {
    if (selectedNotification?.id) {
      mutationState.mutate(selectedNotification);
    }
  }, [selectedNotification]);

  useEffect(() => {
    if (notificationCollection) {
      setSelectedNotification(notificationCollection.subscription);
    }
  }, [notificationCollection]);

  useEffect(() => {
    if (isError && error) {
      errorNotify(error);
      handleOnCloseModal();
    }
  }, [isError, error]);

  return (
    <>
      <PageContent
        disabled={!editable}
        onAdd={onOpenAddModal}
        onHandleActions={onHandleActions}
      />

      {(!!isAdd || !!isEdit) && (
        <NotificationCreateUpdateModal
          disabled={!editable}
          notificationId={notificationId}
          isOpen={!!isAdd || !!isEdit}
          isLoadingNotification={isLoadingNotification}
          notification={selectedNotification}
          onClose={handleOnCloseModal}
        />
      )}

      {openConfirmModal && (
        <ConfirmModal
          isOpen={openConfirmModal}
          onClose={handleOnCloseModal}
          onSubmit={onHandleConfirmSubmit}
          title={t(`table:popover.${confirmTranslationKey}-notification`)}
          description={
            <Trans
              i18nKey={`table:notification.confirm-${confirmTranslationKey}-desc`}
              values={{ name: selectedNotification?.name }}
              components={{ bold: <strong /> }}
            />
          }
          loading={mutationState.isPending}
          disabled={!editable}
        />
      )}
    </>
  );
};

export default PageLoader;

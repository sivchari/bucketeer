import { memo, useMemo } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'i18n';
import { DomainEventEntityMap } from '@types';
import { isNotEmpty } from 'utils/data-type';
import { AuditLogsFilters } from 'pages/audit-logs/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from 'components/dropdown';

interface Props {
  entityType?: DomainEventEntityMap;
  isSystemAdmin: boolean;
  onChangeFilters: (filters: Partial<AuditLogsFilters>) => void;
}

const EntityTypeDropdown = memo(
  ({ entityType, isSystemAdmin, onChangeFilters }: Props) => {
    const { t } = useTranslation(['common', 'form', 'table']);

    const options = useMemo(() => {
      const {
        FEATURE,
        GOAL,
        EXPERIMENT,
        SEGMENT,
        ACCOUNT,
        APIKEY,
        AUTOOPS_RULE,
        PROGRESSIVE_ROLLOUT,
        PUSH,
        ADMIN_SUBSCRIPTION,
        SUBSCRIPTION
      } = DomainEventEntityMap;

      return [
        {
          labelKey: 'source-type.feature-flag',
          value: FEATURE
        },
        {
          labelKey: 'goal',
          value: GOAL
        },
        {
          labelKey: 'source-type.experiment',
          value: EXPERIMENT
        },
        {
          labelKey: 'navigation.user-segment',
          value: SEGMENT
        },
        {
          labelKey: 'account',
          value: ACCOUNT
        },
        {
          labelKey: 'source-type.api-key',
          value: APIKEY
        },
        {
          labelKey: 'source-type.auto-operation',
          value: AUTOOPS_RULE
        },
        {
          labelKey: 'source-type.progressive-rollout',
          value: PROGRESSIVE_ROLLOUT
        },
        {
          labelKey: 'source-type.push',
          value: PUSH
        },
        {
          labelKey: 'source-type.subscription',
          value: isSystemAdmin ? ADMIN_SUBSCRIPTION : SUBSCRIPTION
        }
      ];
    }, [isSystemAdmin]);

    const entityLabel = useMemo(() => {
      const labelKey = options.find(
        item => item.value === Number(entityType)
      )?.labelKey;

      return labelKey ? t(labelKey) : '';
    }, [options, entityType, isSystemAdmin]);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          showClear
          className="max-w-[175px] xxl:max-w-fit [&>div>p]:!text-gray-700"
          label={
            isNotEmpty(entityType) ? (
              <Trans
                i18nKey={'form:kind-filter-value'}
                values={{
                  value: entityLabel
                }}
              />
            ) : (
              ''
            )
          }
          placeholder={
            <Trans
              i18nKey={'form:kind-filter-value'}
              values={{
                value: t('table:code-refs.all')
              }}
            />
          }
          onClear={() =>
            onChangeFilters({
              entityType: undefined
            })
          }
        />
        <DropdownMenuContent align="end" className="min-w-[180px]">
          {options.map((item, index) => (
            <DropdownMenuItem
              key={index}
              label={t(item.labelKey)}
              value={item.value}
              onSelectOption={value =>
                onChangeFilters({
                  entityType: +value
                })
              }
            />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

export default EntityTypeDropdown;

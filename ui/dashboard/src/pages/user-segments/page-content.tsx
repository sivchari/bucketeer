import { useEffect } from 'react';
import { IconAddOutlined } from 'react-icons-material-design';
import { getCurrentEnvironment, useAuth } from 'auth';
import { usePartialState, useToggleOpen } from 'hooks';
import { useTranslation } from 'i18n';
import pickBy from 'lodash/pickBy';
import { UserSegment } from '@types';
import { isEmptyObject, isNotEmpty } from 'utils/data-type';
import { useSearchParams } from 'utils/search-params';
import Button from 'components/button';
import Icon from 'components/icon';
import Filter from 'elements/filter';
import PageLayout from 'elements/page-layout';
import TableListContainer from 'elements/table-list-container';
import CollectionLoader from './collection-loader';
import { UserSegmentsActionsType, UserSegmentsFilters } from './types';
import FilterUserSegmentModal from './user-segment-modal/filter-segment-modal';

const PageContent = ({
  segmentUploading,
  onAdd,
  onEdit,
  onOpenFlagModal,
  onDelete,
  onDownload
}: {
  segmentUploading: UserSegment | null;
  onAdd: () => void;
  onEdit: (v: UserSegment) => void;
  onOpenFlagModal: (v: UserSegment) => void;
  onDelete: (v: UserSegment) => void;
  onDownload: (v: UserSegment) => void;
}) => {
  const { t } = useTranslation(['common']);
  const { consoleAccount } = useAuth();
  const currentEnvironment = getCurrentEnvironment(consoleAccount!);

  const { searchOptions, onChangSearchParams } = useSearchParams();
  const searchFilters: Partial<UserSegmentsFilters> = searchOptions;

  const defaultFilters = {
    page: 1,
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    ...searchFilters
  } as UserSegmentsFilters;

  const [openFilterModal, onOpenFilterModal, onCloseFilterModal] =
    useToggleOpen(false);

  const [filters, setFilters] =
    usePartialState<UserSegmentsFilters>(defaultFilters);

  const onChangeFilters = (values: Partial<UserSegmentsFilters>) => {
    const options = pickBy({ ...filters, ...values }, v => isNotEmpty(v));
    onChangSearchParams(options);
    setFilters({ ...values });
  };

  const onActionHandler = (
    segment: UserSegment,
    type: UserSegmentsActionsType
  ) => {
    switch (type) {
      case 'EDIT':
        return onEdit(segment);
      case 'FLAG':
        return onOpenFlagModal(segment);
      case 'DELETE':
        return onDelete(segment);
      default:
        return onDownload(segment);
    }
  };

  useEffect(() => {
    if (isEmptyObject(searchOptions)) {
      setFilters({ ...defaultFilters });
    }
  }, [searchOptions]);

  return (
    <PageLayout.Content>
      <Filter
        onOpenFilter={onOpenFilterModal}
        action={
          <Button className="flex-1 lg:flex-none" onClick={onAdd}>
            <Icon icon={IconAddOutlined} size="sm" />
            {t(`new-user-segment`)}
          </Button>
        }
        searchValue={filters.searchQuery as string}
        filterCount={
          isNotEmpty(filters.isInUseStatus as boolean) ? 1 : undefined
        }
        onSearchChange={searchQuery => onChangeFilters({ searchQuery })}
      />
      {openFilterModal && (
        <FilterUserSegmentModal
          isOpen={openFilterModal}
          filters={filters}
          onClose={onCloseFilterModal}
          onSubmit={value => {
            onChangeFilters(value);
            onCloseFilterModal();
          }}
          onClearFilters={() => {
            onChangeFilters({ isInUseStatus: undefined });
            onCloseFilterModal();
          }}
        />
      )}
      <TableListContainer>
        <CollectionLoader
          segmentUploading={segmentUploading}
          onAdd={onAdd}
          filters={filters}
          setFilters={onChangeFilters}
          onActionHandler={onActionHandler}
          organizationIds={[currentEnvironment.organizationId]}
        />
      </TableListContainer>
    </PageLayout.Content>
  );
};

export default PageContent;

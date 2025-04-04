import { useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ID_NEW } from 'constants/routing';
import { AnyObject } from 'yup';
import { useToast } from './use-toast';

interface Props {
  idKey?: string;
  addPath?: string;
  closeModalPath?: string;
}

const useActionWithURL = ({ idKey = '*', addPath, closeModalPath }: Props) => {
  const { [idKey]: id, ['*']: path, ...params } = useParams();
  const navigate = useNavigate();
  const { notify } = useToast();
  const location = useLocation();
  const { state } = location;

  const isAdd = useMemo(() => path === ID_NEW, [path]);
  const isClone = useMemo(() => path?.includes('clone'), [path]);
  const isEdit = useMemo(
    () => path && !isAdd && !isClone,
    [path, isAdd, isClone]
  );

  const onOpenAddModal = () =>
    navigate(addPath || `${location.pathname}/${ID_NEW}`);

  const onOpenEditModal = (path: string, state?: AnyObject) =>
    navigate(path, {
      state
    });

  const onCloseActionModal = (path?: string) => {
    if (closeModalPath || path) navigate(String(closeModalPath || path));
  };

  const errorToast = (error: AnyObject) => {
    const { message, status } = error || {};
    notify({
      messageType: 'error',
      message:
        message || status === 409
          ? 'The same data already exists'
          : 'Something went wrong.'
    });
  };
  return {
    id,
    isAdd,
    isEdit,
    isClone,
    state,
    onOpenAddModal,
    onOpenEditModal,
    onCloseActionModal,
    errorToast,
    params
  };
};

export default useActionWithURL;

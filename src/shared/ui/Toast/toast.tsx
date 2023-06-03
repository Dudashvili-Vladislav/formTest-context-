/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { toast } from 'react-toastify';

export const toastSuccess = () => {
  toast.success('🦄 Success', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const toastError = (error: any) => {
  toast.error(`🦄 ${error}`, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

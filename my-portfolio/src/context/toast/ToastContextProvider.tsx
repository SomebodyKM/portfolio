import { useCallback, useState, type ReactNode } from 'react';
import type { ToastType } from '../../components/ui/Toast/Toast';
import { ToastContext } from './ToastContext';
import Toast from '../../components/ui/Toast/Toast';

const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ message, type });
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;

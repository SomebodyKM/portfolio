import { useEffect } from 'react';
import { FaXmark, FaRegCircleCheck } from 'react-icons/fa6';
import { FiAlertCircle } from 'react-icons/fi';

export type ToastType = 'success' | 'error';

type Props = {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
};

const Toast = ({ message, type, onClose, duration = 4000 }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const styles =
    type === 'success'
      ? 'border-neon-cyan text-neon-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)]'
      : 'border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]';

  return (
    <div
      className={`fixed bottom-8 right-4 md:right-8 z-50 flex items-center gap-4 px-6 py-4 rounded-lg border-2 ${styles} bg-cyber-surface/90 backdrop-blur-xl animate-slide-up min-w-75 max-w-md`}
    >
      <div className="shrink-0">
        {type === 'success' ? (
          <FaRegCircleCheck size={24} />
        ) : (
          <FiAlertCircle size={24} />
        )}
      </div>

      <div className="flex flex-col flex-1 mr-2">
        <span className="font-orbitron font-bold text-sm uppercase tracking-wide">
          {type === 'success' ? 'Message Sent' : 'Error'}
        </span>
        <span className="font-mono text-xs text-text-secondary mt-1 leading-tight">
          {message}
        </span>
      </div>

      <button
        onClick={onClose}
        className="shrink-0 hover:opacity-70 transition-opacity p-1 rounded hover:bg-white/5"
      >
        <FaXmark size={18} />
      </button>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-current opacity-30 animate-shrink-width"
        style={{
          animationDuration: `${duration}ms`,
        }}
      />
    </div>
  );
};

export default Toast;

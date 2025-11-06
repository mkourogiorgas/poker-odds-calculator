import { useEffect, useRef } from 'react';

type ErrorProps = {
  errorMessage: string;
  onDismiss?: () => void;
};

const Error = ({ errorMessage, onDismiss }: ErrorProps) => {
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (errorRef.current) {
      errorRef.current.focus();
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onDismiss) {
        onDismiss();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onDismiss]);

  return (
    <div
      ref={errorRef}
      tabIndex={-1}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <div className="flex justify-between items-start">
        <div>
          <span className="font-medium">Error: </span>
          <span>{errorMessage}</span>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            aria-label="Dismiss error"
            className="ml-4 text-red-700 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2"
          >
            ✕
          </button>
        )}
      </div>
      {onDismiss && <p className="text-xs mt-2 text-red-600">Press Escape to dismiss</p>}
    </div>
  );
};

export default Error;

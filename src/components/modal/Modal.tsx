import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import loadGif from '../../assets/load.gif';

type ModalProps = {
  isOpen: boolean;
};

const Modal = ({ isOpen }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;

    if (modalRef.current) {
      modalRef.current.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/90 focus:outline-none"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-busy="true"
      aria-label="Calculating poker odds"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <img src={loadGif} alt="" className="mx-auto w-16 h-16" aria-hidden="true" />
        <p className="mt-4 text-gray-800">
          <strong>Calculating odds...</strong>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Processing more than 8,000,000 computations. This may take up to 10 seconds.
        </p>
        <p className="mt-2 text-xs text-gray-500">Tip: Add flop cards to speed up calculations</p>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

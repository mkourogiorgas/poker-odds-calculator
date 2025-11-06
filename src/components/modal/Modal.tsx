import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import loadGif from "../../assets/load.gif";
import C from "./constants";
import { description, image, modalBox, overlay, tip, title } from "./styles";

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
      if (event.key === "Tab") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
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
      className={overlay}
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-busy="true"
      aria-label={C.ARIA}
    >
      <div className={modalBox}>
        <img
          src={loadGif}
          alt="Loading animation - calculating poker odds"
          className={image}
          aria-hidden="false"
        />
        <p className={title}>
          <strong>{C.CALCULATING}</strong>
        </p>
        <p className={description}>{C.MODAL_TEXT}</p>
        <p className={tip}>{C.TIP_TEXT}</p>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalPropsTypes = {
    children: ReactNode;
};
const modal: string = 'modal'

function Modal({ children }: ModalPropsTypes) {
    const modalRoot = document.getElementById(modal);
    if (!modalRoot) {
        return null;
    }
    return createPortal(<div>{children}</div>, modalRoot);
}

export default Modal;

import React, { useEffect } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.styled';

export const Modal = ({ closeModal, children }) => { 
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  })
  
  const onKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };
  
  const onOverlay = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
      <OverlayStyled onClick={onOverlay}>
        <ModalStyled>{children}</ModalStyled>
      </OverlayStyled>
    );

};


    
  


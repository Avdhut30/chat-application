import React from 'react';
import { Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const ImgBtnModal = ({ src, fileName }) => {
  const { isOpen, open, close } = useModalState();
  return (
    <div>
      <>
        <input
          type="image"
          src={src}
          alt="file"
          onClick={open}
          className="mw-100 mh-60 w-auto"
        />
        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>{fileName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img src={src} height="100%" width="100%" alt="file" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a href={src} target="_blank" rel="noopener noreferrer">
              View original
            </a>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ImgBtnModal;

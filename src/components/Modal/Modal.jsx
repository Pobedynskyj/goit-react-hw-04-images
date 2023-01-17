import s from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ closeModal, image }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, []);

  const handleCloseModal = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={image} alt="img" className={s.modalImg} />
      </div>
    </div>
  );
};
export default Modal;

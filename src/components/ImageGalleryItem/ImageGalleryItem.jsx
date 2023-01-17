import Modal from 'components/Modal';
import { useState } from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, largeImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={s.listItem}>
        <img
          src={item}
          alt=""
          className={s.itemImage}
          onClick={handleModalOpen}
          loading="lazy"
        />
        {isModalOpen && (
          <Modal image={largeImg} closeModal={handleModalClose} />
        )}
      </li>
    </>
  );
};

export default ImageGalleryItem;

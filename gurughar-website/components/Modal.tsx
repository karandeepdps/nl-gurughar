import React from 'react';
import styles from '../styles/Modal.module.css'; 

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
    text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, images, text }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={styles.imageGrid}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className={styles.modalImage} />
                    ))}
                </div>
                <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
};

export default Modal;

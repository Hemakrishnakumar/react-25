import React, { useState } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
const OpenModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {isModalOpen ? (
        <Modal>
          <PopUp onClose={() => setIsModalOpen(false)} />
        </Modal>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal Popup</button>
      )}
      <h1>there</h1>
    </div>
  );
};

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={styles.modal}>{children}</div>,
    document.body
  );
}

function PopUp({ onClose }) {
  return (
    <div className={styles.popup}>
      <h1 className={styles.header}>Custom Header</h1>
      <button className={styles.close} onClick={onClose}>
        &times;
      </button>
      <div className={styles.content}>This is some context</div>
      <h2 className={styles.footer}>Custom footer</h2>
    </div>
  );
}
export default OpenModal;

import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ url, setSelectedImage }) => {
  console.log(url);
  return (
    <div className={styles.modal} onClick={() => setSelectedImage(null)}>
      <div className={styles.imageWrapper}>
        <img src={url} alt="selected image" />
      </div>
    </div>
  );
};

export default Modal;

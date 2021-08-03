import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./UploadForm.module.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const fileTypes = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    const selected = e.target.files[0];

    let fileCheck = fileTypes.some((file) => {
      return selected.type === file;
    });

    if (selected && fileCheck) {
      setFile(selected);
      setError(false);
    } else {
      setError("Must be an image file (jpeg or png)");
      setFile(null);
    }
  };
  return (
    <form className={styles.formWrapper}>
      <label className={styles.uploadBtn}>
        <input type="file" onChange={changeHandler} />
        <span className={styles.btnText}>Add Image</span>
      </label>
      <div className={styles.output}>
        {error && <span>{error}</span>}
        {file && <span>{file.name}</span>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;

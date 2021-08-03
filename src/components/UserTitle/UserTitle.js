import React from "react";
import UploadForm from "../UploadForm/UploadForm";
import styles from "./UserTitle.module.css";

const UserTitle = () => {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.userInfo}>
        <div className={styles.imageContainer}>
          <img src="/images/profile.png" alt={"profile"} />
        </div>
        <div>
          <h2 className={styles.heading}>BasedTyche</h2>
        </div>
      </div>
      <p>
        Welcome to my Album page, my name is Hanno. I really enjoy photography
        and traveling. Hopefully you enjoy my page!
      </p>
      <UploadForm />
    </div>
  );
};

export default UserTitle;

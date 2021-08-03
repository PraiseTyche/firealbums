import React from "react";
import useFirestore from "../../hooks/useFirestor";
import styles from "./ImageGrid.module.css";
const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className={styles.container}>
      {docs &&
        docs.map((doc) => {
          return (
            <div
              className={styles.imageWrapper}
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <img src={doc.url} alt={"user pic"} />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;

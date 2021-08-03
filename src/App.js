import React, { useState } from "react";
import Container from "./components/Container/Container";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";

import UserTitle from "./components/UserTitle/UserTitle";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);

  return (
    <div>
      <Navbar />
      <Container>
        <UserTitle />
        <ImageGrid setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal url={selectedImage} setSelectedImage={setSelectedImage} />
        )}
      </Container>
    </div>
  );
};

export default App;

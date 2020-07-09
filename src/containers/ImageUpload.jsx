import React, { Component, useState } from "react";
import { storage } from "../firebase";
import { Input, Button } from "semantic-ui-react";
const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };

  const handleUploadImage = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log("===>", url);
          });
      }
    );
  };
  return (
    <div>
      <form>
        <Input type="file" onChange={handleImageAsFile} />

        <Button onClick={handleUploadImage}>Upload</Button>
      </form>
    </div>
  );
};

export default ImageUpload;

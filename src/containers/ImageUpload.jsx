import React, { useState } from "react";
import { storage } from "../firebase";
import { Input, Button, Message, FormGroup, Progress } from "semantic-ui-react";

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const [percent, setPercent] = useState(0);
  const [url, setUrl] = useState("");
  const [totalBytes, setTotalBytes] = useState(0);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setTotalBytes(image.size);
    setImage(image);
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setPercent(parseInt((snapshot.bytesTransferred / totalBytes) * 100));
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
            setUrl(url);
            props.UploadedUrl(url);
          });
      }
    );
  };
  return (
    <div>
      <FormGroup widths="equal">
        <Input
          type="file"
          style={{ width: "100%" }}
          onChange={handleImageAsFile}
        />

        <Button
          color="instagram"
          onClick={handleUploadImage}
          disabled={image === null}
        >
          Upload
        </Button>
      </FormGroup>
      {percent > 0 && percent < 100 ? (
        <Progress percent={percent} indicating />
      ) : null}
      {url !== "" ? <Message color="green">Upload success</Message> : null}
      <br />
    </div>
  );
};

export default ImageUpload;

import React, { useState } from "react";
import { Form, Image } from "react-bootstrap";

const ChoosePhotoInput = (props) => {
  const { label, handleChange, placeholder } = props;

  const [imgName, setImgName] = useState(placeholder);
  const [imgSrc, setImgSrc] = useState("");

  const onChange = (event) => {
    if (event.target.files[0]) {
      setImgName(event.target.files[0].name);

      var reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        setImgSrc(result);
        handleChange(result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setImgSrc("");
      setImgName(placeholder);
    }
  };

  return (
    <Form.Group style={{ textAlignLast: "center" }}>
      <Form.Label>{label}</Form.Label>
      <Form.File
        id="image"
        label={imgName}
        data-browse="Browse"
        custom
        onChange={onChange}
        style={{ textAlignLast: "start" }}
      />
      <Image
        src={imgSrc}
        style={{
          visibility: imgSrc !== "" ? "visible" : "hidden",
          maxWidth: "200px",
          minWidth: "200px",
          marginTop: "10px",
          borderRadius: "20px",
        }}
      />
    </Form.Group>
  );
};

export default ChoosePhotoInput;

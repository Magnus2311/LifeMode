import React from "react";
import { Form, Image } from "react-bootstrap";

const ChoosePhotoInput = (props) => {
  const { label, imgName, handleChange, imgSrc } = props;

  return (
    <Form.Group style={{ textAlignLast: "center" }}>
      <Form.Label>{label}</Form.Label>
      <Form.File
        id="image"
        label={imgName}
        data-browse="Browse"
        custom
        onChange={handleChange}
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

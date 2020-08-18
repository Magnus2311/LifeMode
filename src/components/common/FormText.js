import React from "react";
import { Form } from "react-bootstrap";
const FormText = (props) => {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
};

export default FormText;

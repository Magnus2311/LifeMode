import React from "react";
import { Form } from "react-bootstrap";
const FormText = (props) => {
  const isValid = props.isValid ?? true;
  return (
    <Form.Group>
      <Form.Label style={props.style}>{props.label}</Form.Label>
      <Form.Control
        props={props}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        style={props.style}
        autoFocus={props.autoFocus}
        isInvalid={!isValid}
      />
    </Form.Group>
  );
};

export default FormText;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispath = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    // 실제로 값을 넘겨주는 것 dispath // action과 payload에 값을 넣어 넘겨줌
    dispath({
      type: "ADD_CONTACT",
      //   payload: { name: name, phoneNumber: phoneNumber },
      payload: { name, phoneNumber }, // 위, 아래 같은 것(ES6문법)
    });
  };
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;

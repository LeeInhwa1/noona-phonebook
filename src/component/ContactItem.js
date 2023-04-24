import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
            alt=""
          />
        </Col>
        <Col klg={10}>
          <div>{item.name}</div>
          <div>{item.phonNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;

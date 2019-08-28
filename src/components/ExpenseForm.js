import React from "react";
import { MdSend } from "react-icons/md";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";

const ExpenseForm = ({
  desc,
  amount,
  handleAmount,
  handleDesc,
  handleSubmit,
  edit
}) => {
  return (
    <Form onSubmit={handleSubmit} className="p-3 bg-light">
      <FormGroup row>
        <Col sm="6">
          <Label for="desc">Description</Label>
          <Input
            type="text"
            name="desc"
            id="desc"
            placeholder="e.g. rent"
            value={desc}
            onChange={handleDesc}
          />
        </Col>
        <Col sm="6">
          <Label for="amount">Amount</Label>
          <Input
            type="text"
            name="amount"
            id="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <FormGroup row className="justify-content-center">
        <Button type="submit">
          {edit ? "Edit" : "Submit"} <MdSend />
        </Button>
      </FormGroup>
    </Form>
  );
};

export default ExpenseForm;

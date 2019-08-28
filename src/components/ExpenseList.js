import React from "react";
import { Button, Container, Row } from "reactstrap";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  handleDeleteAll,
  handleDeleteItem,
  handleEditItem
}) => {
  return (
    <>
      <ul className="m-5">
        {expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      {expenses.length > 0 && (
        <Container>
          <Row className="justify-content-center mt-1 mb-1">
            <Button onClick={handleDeleteAll}>
              Clear All <MdDelete />
            </Button>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ExpenseList;

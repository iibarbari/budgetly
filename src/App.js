import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/AlertBox";
import uuid from "uuid/v4";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleDesc = e => {
    setDesc(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (desc !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(expense => {
          return expense.id === id ? { ...expense, desc, amount } : expense;
        });

        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "Changed data lel" });
      } else {
        const singleExpense = { id: uuid(), desc, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "New budget added." });
      }
      setDesc("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: "Check values pls !!" });
    }
  };
  const handleDeleteAll = () => {
    setExpenses([]);
    setDesc("");
    setAmount("");
    handleAlert({ type: "danger", text: "all items deleted" });
  };

  const handleDeleteItem = id => {
    let tempExpenses = expenses.filter(expense => {
      return expense.id !== id;
    });

    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleEditItem = id => {
    setEdit(true);
    let tempItem = expenses.find(expense => {
      return expense.id === id;
    });
    let { desc, amount } = tempItem;
    setDesc(desc);
    setAmount(amount);
    setId(tempItem.id);
  };

  return (
    <>
      <Container fluid className="pt-5 pb-5 bg-dark text-white">
        <Row>
          <Col sm="12">
            <h1>Budgetly Fo' Yo' Ho'</h1>
          </Col>
        </Row>
      </Container>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <main>
        <ExpenseForm
          handleDesc={handleDesc}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          desc={desc}
          amount={amount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDeleteAll={handleDeleteAll}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
        />
      </main>
      <Container className="mt-3 mb-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <h3>
              Total Spending :{" "}
              {expenses.reduce((acc, curr) => {
                return (acc += parseInt(curr.amount));
              }, 0)}
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

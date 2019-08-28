import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleDeleteItem, handleEditItem }) => {
  const { id, desc, amount } = expense;

  return (
    <li className="item">
      <ul className="list-inline d-flex justify-content-between">
        <li className="list-inline-item flex-grow-1">
          <span className="desc">{desc}</span>
        </li>
        <li className="list-inline-item pr-5 pl-5">
          <span className="amount">{amount}</span>
        </li>
        <li className="list-inline-item">
          <button
            onClick={() => handleEditItem(id)}
            className="edit-button"
            aria-label="edit-button"
          >
            <MdEdit />
          </button>
        </li>
        <li className="list-inline-item">
          <button
            onClick={() => handleDeleteItem(id)}
            className="delete-button"
            aria-label="delete-button"
          >
            <MdDelete />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default ExpenseItem;

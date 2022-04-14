import React, { useState, useId } from "react";
import styling from "./ButtonTable.module.scss";

const ButtonTable = ({ ApiFetcher, fetchPerson }) => {
  const [showTable, setShowTable] = useState(false);
  const [addListToTable, setAddListToTable] = useState([]);
  //   const id = useId();

  const addList = () => {
    // eslint-disable-next-line no-unused-expressions
    addListToTable.some((data) => data.email === fetchPerson.email)
      ? null
      : setAddListToTable([
          ...addListToTable,
          {
            name: fetchPerson.fullname,
            email: fetchPerson.email,
            phone: fetchPerson.phone,
            age: fetchPerson.age,
          },
        ]);
  };

  return (
    <>
      <div className={styling.buttons}>
        <button className={styling.newuser} onClick={ApiFetcher}>
          NEW USER
        </button>
        <button
          className={styling.adduser}
          onClick={() => {
            setShowTable(true);
            addList();
          }}
        >
          ADD USER
        </button>
      </div>
      <table className={styling.table}>
        {showTable ? (
          <thead>
            <tr className={styling.title}>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {addListToTable?.map((info, id) => {
            return (
              <tr key={id}>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.phone}</td>
                <td>{info.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ButtonTable;
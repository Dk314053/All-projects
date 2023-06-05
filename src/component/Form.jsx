import React from "react";
import { useState } from "react";
import './Form.css'

const Form = () => {
  const [text, setText] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [student, setStudent] = useState([]);

  const postData = (e) => {
    setText({ ...text, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      firstName: text.firstName,
      lastName: text.lastName,
      email: text.email,
      password: text.password,
    };
    console.log(newStudent)
    setStudent([...student, newStudent]);
    setText({
        firstName: "",
        lastName: "",
        email:"",
        password: "",
      })
  };

  return (
    <div className="main-container">
        <h1 className="head">Student Form</h1>
      <form onSubmit={handleSubmit} >
        <div className="form">
        <input
        className="input"
          type="text"
          placeholder="firstName"
          value={text.firstName}
          id="firstName"
          onChange={postData}
        />
        <input
         className="input"
          type="text"
          placeholder="lastName"
          value={text.lastName}
          id="lastName"
          onChange={postData}
        />
        <input
         className="input"
          type="email"
          placeholder="email"
          value={text.email}
          id="email"
          onChange={postData}
        />
        <input
         className="input"
          type="password"
          placeholder="password"
          value={text.password}
          id="password"
          onChange={postData}
        />
        <button type="submit">Submit</button>
        </div>
      </form>
      <div className="container">
      {student.length > 0 && (
        <table className="table">
          <thead className="thead">
            <tr className="thead">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {student.map((ele, index) => (
             
                <tr key={index}>
                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.password}</td>
                </tr>
            )
            )}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};

export default Form;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [values, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    pauseOnFocusLoss: true,
    autoClose: 8000,
    draggable: true,
    theme: "dark",
  };
  const handleChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      toast.error("password and confirm password should be same", toastOptions);
      return false;
    } else if (username.length < 4) {
      toast.error(
        "username should be atleast longer then 4 characters",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "password should be atleast longer  8 characters",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("email can't be empty", toastOptions);
      return false;
    }
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />

            <h1>Snappy</h1>
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm Password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Create User</button>

          <span>
            Already have an Account? <Link to="/login"> Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #131324;
  form {
    background-color: #00000076;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 1rem;
    padding: 3rem 5rem;
  }

  .brand {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: white;
  }

  img {
    height: 5rem;
  }
  input {
    padding: 1rem;
    background-color: transparent;
    border-radius: 0.4rem;
    border: 0.1rem solid #4e0eff;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      outline: none;
      border: 0.1rem solid #997af0;
    }
  }

  button {
    padding: 1rem 3rem;
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background-color: #4e0eff;
    color: white;

    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      color: white;
      background-color: #4e0eff;
    }
  }
  span {
    text-transform: uppercase;
    color: white;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;

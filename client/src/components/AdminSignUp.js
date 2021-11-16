import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

function AdminSignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ssn, setSSN] = useState("");
  const [error, setError] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const postData = {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      ssn,
    };

    try {
      await axios.post("http://localhost:8000/api/signup", postData);
      navigate("/signin");
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  };
  return (
    <div id="form_signUp">
      <form onSubmit={submitHandler}>
        <h2
          style={{
            maxWidth: "700px",
            width: "100%",
            margin: "auto",
            textAlign: "center",
            fontFamily: "fantasy",
          }}
        >
          Admin Sign Up Portal
        </h2>
        <div
          style={{
            maxWidth: "700px",
            width: "100%",
            margin: "auto",
            backgroundColor: "white",
            paddingBottom: "20px",
          }}
        >
          <div
            id="container"
            style={{
              display: "flex",
              maxWidth: "700px",
              width: "100%",
              margin: "auto",
              justifyContent: "space-around",
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          >
            <div id="leftForm">
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="firstName">First Name: </label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: "small",
                    }}
                  >
                    {error}
                  </h3>
                )}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="email">Email: </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: "small",
                    }}
                  >
                    {error}
                  </h3>
                )}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="password">Password: </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: "small",
                    }}
                  >
                    {error}
                  </h3>
                )}
              </div>
            </div>
            <div id="rightForm">
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="lastName">Last Name: </label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: "small",
                    }}
                  >
                    {error}
                  </h3>
                )}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="ssn">Social Security Number (SSN): </label>
                <br />
                <input
                  type="text"
                  name="ssn"
                  id="ssn"
                  value={ssn}
                  onChange={(e) => setSSN(e.target.value)}
                />
                {error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: "small",
                    }}
                  >
                    {error}
                  </h3>
                )}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: "small",
                    }}
                  >
                    {error}
                  </h3>
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button type="submit" className="btn-format">
              Sign Up
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>
              Already have an account? <Link to="/signin">Sign In</Link> here
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminSignUp;

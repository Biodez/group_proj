import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setEmail("");
    setPassword("");

    const postData = {
      email,
      password,
    };

    axios
      .post("http://localhost:8000/api/signin", postData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.message);
        navigate("/display");
      })
      .catch((err) => setError(err.response.data.error));
  };
  return (
    <div id="form_signIn">
      <form onSubmit={handleLogin}>
        <h2
          style={{
            maxWidth: "500px",
            width: "100%",
            margin: "auto",
            textAlign: "center",
            fontFamily: "fantasy",
          }}
        >
          Admin Sign In Portal
        </h2>
        {error && (
          <h3
            style={{ color: "red", textAlign: "center", fontFamily: "fantasy", fontSize: "small" }}
          >
            {error}
          </h3>
        )}
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            margin: "auto",
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          <div>
            <div
              style={{
                marginBottom: "20px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button type="submit" className="btn-format">
                Sign In
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link> here
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminSignIn;

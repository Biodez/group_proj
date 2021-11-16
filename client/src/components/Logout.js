import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function Logout() {
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout", {}, { withCredentials: true })
      .then((response) => {
        console.log(response);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5px"
      }}
    >
      <button
        onClick={handleLogout}
        type="button"
        className="btn btn-secondary"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;

import React from "react";
import { Link } from "@reach/router";

function AdminDisplay() {
  return (
    <div id="adminContainer">
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          margin: "auto",
          backgroundColor: "white",
          paddingBottom: "20px",
          paddingTop: "20px"
        }}
      >
        <div>
          <ul>
            <li>
              <Link to="/product">Add Product</Link>
            </li>
            <li>
              <Link to="#">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDisplay;

import React, { useState } from "react";

function ProductForm(props) {
  const {
    initialTitle,
    initialPrice,
    initialBrand,
    initialQuantity,
    initialAbout,
    initialImageLink,
    onSubmitProp,
    errors,
  } = props;

  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [brand, setBrand] = useState(initialBrand);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [about, setAbout] = useState(initialAbout);
  const [imageLink, setImageLink] = useState(initialImageLink);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, brand, quantity, about, imageLink });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* {authError && (
          <h3
            style={{
              maxWidth: "700px",
              width: "100%",
              margin: "auto",
              textAlign: "center",
              fontFamily: "fantasy",
            }}
          >
            {authError}
          </h3>
        )} */}
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
            <div id="leftFormProduct">
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="title">Title: </label>
                <br />
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="price">Price: </label>
                <br />
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="brand">Brand: </label>
                <br />
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="quantity">Quantity: </label>
                <br />
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div id="rightFormProd">
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="about">About: </label>
                <br />
                <textarea
                  name="about"
                  id="about"
                  cols="30"
                  rows="10"
                  placeholder="start typing the about of the product"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="imageLink">Image Link: </label>
                <br />
                <input
                  type="text"
                  name="imageLink"
                  id="imageLink"
                  value={imageLink}
                  onChange={(e) => setImageLink(e.target.value)}
                />
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
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;

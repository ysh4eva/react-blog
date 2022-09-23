import React from "react";

const Category = ({ handleCategory, options }) => {
  return (
    <div data-testid="category">
      <div style={{ width: "20rem", marginTop: "20px" }}>
        <div className="categories">
          <h1>Categories</h1>
          <div className="list" />

          {options.map((item, index) => (
            <div
              className="list"
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleCategory(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

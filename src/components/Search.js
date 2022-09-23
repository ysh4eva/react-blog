import React from "react";

const Search = ({ handleSearch, searchValue, onInputChange }) => {
  return (
    <div className="searchForm">
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          data-testid="search-input"
          type="search"
          className="form-control"
          placeholder="Search "
          value={searchValue}
          onChange={onInputChange}
        />
        <button className="submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

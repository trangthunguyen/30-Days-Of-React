import React from "react";
import "../../../styles/components/main/seacrh/Search.scss";

const Search = (props) => {
  const { onChange } = props;
  return (
    <div className="search">
      <input
        className="search-inp"
        type="text"
        name="search"
        placeholder="Search countries by name, city and language"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;

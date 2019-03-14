import React from "react";

const Search = props => {
  return (
    <input
      type="text"
      placeholder="search rappers"
      value={props.value}
      onChange={props.changeHandler}
    />
  );
};

export default Search;

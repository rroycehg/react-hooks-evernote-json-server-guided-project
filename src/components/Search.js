import React from "react";

function Search(props) {
  
  return (
    <div className="filter">
      <input id="search-bar" 
      type="text" 
      placeholder="Search Notes" 
      value={props.searchItem}
      onChange={props.makeItemChange}
      />
    </div>
  );
}

export default Search;

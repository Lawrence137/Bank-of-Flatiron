import React from "react";

function Search({search, setSearch}) {
  
  function handleSearch(event){
    setSearch(event.target.value);
  }

  return (
    <div >
      <input
       className="input"
        type="text"
         placeholder="Search Recent Transactions"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;

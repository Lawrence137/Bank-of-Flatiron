import React, { useState } from "react";

function NewTransactions({newTransaction}) {
  const [formData, setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:""
  })
  
  function handleSubmit(event){
    event.preventDefault();
    fetch("https://my-json-server.typicode.com/Lawrence137/db/transactions", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then((data) => newTransaction(data))

  }

  function handleChange(event){
    
    const key = event.target.name
    const value = event.target.value;
    setFormData({...formData, [key]: value})
  }

  return (
    <div className="inputsContainer">
      <form onSubmit={(handleSubmit)}>
        <div>
        <h3>Add a Transaction</h3>
          <input className="input" onChange={ handleChange } type="date" name="date" />
          <br></br>
          <input className="input" onChange={ handleChange } type="text" name="description" placeholder="Description" />
          <br></br>
          <input className="input"  onChange={ handleChange } type="text" name="category" placeholder="Category" />
          <br></br>
          <input className="input" onChange={ handleChange } type="number" name="amount" placeholder="Amount" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewTransactions;

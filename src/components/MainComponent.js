import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import NewTransactions from "./NewTransactions";


function MainComponent() {
  const [transactions, setTransaction] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Lawrence137/db/transactions")
    .then(r => r.json())
    .then((data) => setTransaction(data))
  },[])

  function newTransactionList (newTransactions){
    const newTransactionArr = [...transactions, newTransactions]
    setTransaction(newTransactionArr)
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <br></br>
      <br></br>
      <TransactionsList transactionsArr={transactions} setTransaction={setTransaction} search={search} />
      
      <br></br>
      <NewTransactions newTransaction={newTransactionList} />
      <br></br>
      
      
    </div>
  );
}

export default MainComponent;

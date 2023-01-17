import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactionsArr, search}) {

  let allTransactions;

  if (transactionsArr){
    const sievedTransactions = transactionsArr.filter(transaction => {
      return (transaction.description.toLowerCase().includes(search.toLowerCase()))
  })

  allTransactions = sievedTransactions.map((transaction) => {
    return <Transaction 
      key={transaction.id}
      date={transaction.date}
      description={transaction.description}
      category={transaction.category}
      amount={transaction.amount}
    />
  })
  }
  
  return (
  <div className="container">
    <table className="table" border='1' >
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
        {allTransactions}
      </tbody>
    </table>
  </div>  
  );
}

export default TransactionsList;

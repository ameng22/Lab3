import React, { createContext, useContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionContainer = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([
    { id: 1, name: 'Starbucks', amount: '$12', date: '2024-03-25',loc:'London, ON' },
    { id: 2, name: 'Apple Store', amount: '$101', date: '2024-03-24',loc:'Halifax, NS' },
    { id: 3, name: 'Sephora', amount: '$120', date: '2024-03-25',loc:'Kelowna, BC' },
    { id: 4, name: 'Shopper Drug Mart', amount: '$12', date: '2024-03-24',loc:'Kitchener, ON' },
    { id: 5, name: 'Pizza Hut', amount: '$24', date: '2024-03-25',loc:'London, ON' },
    { id: 6, name: 'Cheesecake Factory', amount: '$45', date: '2024-03-24',loc:'North York, ON' },
    { id: 7, name: 'Nike', amount: '$250', date: '2024-03-25',loc:'Niagra, ON' },
    { id: 8, name: 'Tim Hortons', amount: '$7.89', date: '2024-03-24',loc:'Toronto, ON' },
    { id: 9, name: 'Whole Foods', amount: '$78', date: '2024-03-25',loc:'Vancouver, BC' },
    { id: 10, name: 'Cineplex', amount: '$42.50', date: '2024-03-24',loc:'London, ON' },
  ]);

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};

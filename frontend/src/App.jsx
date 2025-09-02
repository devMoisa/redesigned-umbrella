import { useEffect } from 'react';
import { API } from './api/api';
import { useState } from 'react';

const CenterBlock = ({ children }) => {
  return <div>{children}</div>;
};

export const App = () => {
  const [transactionList, setTransactionsList] = useState([]);
  const [nameTransaction, setNameTransaction] = useState('');

  const fetchTransactions = async () => {
    try {
      const { data } = await API.get('/transactions');

      setTransactionsList(data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const createTransaction = () => {};

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <CenterBlock>
        <div className='flex flex-col mb-5'>
          <h2 className='mb-5 text-3xl text-center'>FORM!</h2>
          <div className='flex flex-col gap-10'>
            <input className='p-2 border rounded-2xl pl-5' type='text' placeholder='Type here the name of transaction' />
            <input className='p-2 border rounded-2xl pl-5' type='text' placeholder='Type here the description of transaction' />
            <input className='p-2 border rounded-2xl pl-5' type='text' placeholder='Type here the value of transaction' />
          </div>
        </div>

        {transactionList.map((item, index) => {
          return (
            <div className='flex flex-col' key={index}>
              <h1 className='text-red-400'>ID: {item.id}</h1>
              <h1 className='text-purple-500'>NAME: {item.name}</h1>
              <h1 className='text-gray-500'>VALUE: {item.value}</h1>
              <h1 className='text-green-700'>DESCRIPTION: {item.description}</h1>
              <h1>CREATED AT: {item.createdAt}</h1>
            </div>
          );
        })}
      </CenterBlock>
    </div>
  );
};

import { Plus, Minus, CreditCard, MoreHorizontal } from 'lucide-react';

const TransactionHistory = () => (
  <div className='p-6 bg-white rounded-2xl shadow-sm'>
    <div className='flex justify-between items-start mb-6'>
      <h2 className='text-xl font-bold text-gray-900'>Transaction history</h2>
      <button className='text-gray-400 hover:text-gray-600'>
        <MoreHorizontal className='h-5 w-5' />
      </button>
    </div>

    <div className='space-y-4'>
      <div className='flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0'>
        <div className='flex items-center'>
          <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4'>
            <Plus className='w-5 h-5 text-green-600' />
          </div>
          <div>
            <p className='font-medium text-gray-900'>Payment received</p>
            <p className='text-sm text-gray-500'>Jan 15</p>
          </div>
        </div>
        <span className='text-green-600 font-medium'>+ $150.00</span>
      </div>

      <div className='flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0'>
        <div className='flex items-center'>
          <div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4'>
            <Minus className='w-5 h-5 text-red-600' />
          </div>
          <div>
            <p className='font-medium text-gray-900'>Transfer sent</p>
            <p className='text-sm text-gray-500'>Jan 12</p>
          </div>
        </div>
        <span className='text-red-600 font-medium'>- $75.00</span>
      </div>

    </div>

    <button className='w-full mt-4 py-2 text-[#142C8D] text-sm font-medium hover:underline'>
      <span aria-hidden='true'>↻</span> Refresh History
    </button>
  </div>
);

export default TransactionHistory;

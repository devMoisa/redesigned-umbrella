import { MoreHorizontal } from 'lucide-react';

const PaymentsReceived = () => (
  <div className='p-6 bg-white rounded-2xl shadow-sm'>
    <div className='flex justify-between items-start mb-4'>
      <h2 className='text-xl font-bold text-gray-900'>Payments received</h2>
      <button className='text-gray-400 hover:text-gray-600'>
        <MoreHorizontal className='h-5 w-5' />
      </button>
    </div>
    <div className='mb-2'>
      <span className='text-4xl font-light text-gray-900'>$0.00</span>
    </div>
    <p className='text-sm text-gray-500'>Available</p>
  </div>
);

export default PaymentsReceived;

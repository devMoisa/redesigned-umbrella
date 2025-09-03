import { Github } from 'lucide-react';

const PayPalBenefits = () => (
  <div className='p-6 bg-white rounded-2xl shadow-sm'>
    <a href='https://github.com/devMoisa' target='_blank' rel='noopener noreferrer' className='flex items-start hover:bg-gray-50 p-2 -m-2 rounded-xl transition-colors'>
      <div className='w-10 h-10 bg-[#142C8D] rounded mr-4 flex items-center justify-center flex-shrink-0'>
        <Github className='w-5 h-5 text-white' />
      </div>
      <div className='flex-1'>
        <h3 className='text-lg font-semibold text-gray-900 mb-1'>Get new dev in your PayPal team</h3>
        <p className='text-sm text-gray-600'>Enjoy all the benefits of having Moises in your team</p>
      </div>
    </a>
  </div>
);

export default PayPalBenefits;

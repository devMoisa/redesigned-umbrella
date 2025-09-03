import { Linkedin } from 'lucide-react';

const ConfigureAccount = () => (
  <div className='p-6 bg-white rounded-2xl shadow-sm'>
    <a href='https://www.linkedin.com/in/devmoisa/' target='_blank' rel='noopener noreferrer' className='flex items-start hover:bg-gray-50 p-2 -m-2 rounded-xl transition-colors'>
      <div className='w-10 h-10 mr-4 flex items-center justify-center flex-shrink-0 relative'>
        <svg className='w-10 h-10 transform -rotate-90' viewBox='0 0 36 36'>
          <path className='text-gray-200' stroke='currentColor' strokeWidth='3' fill='transparent' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' />
          <path className='text-[#142C8D]' stroke='currentColor' strokeWidth='3' strokeDasharray='80, 100' strokeLinecap='round' fill='transparent' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' />
        </svg>
        <span className='absolute text-sm font-bold text-[#142C8D]'>4/5</span>
      </div>
      <div className='flex-1'>
        <h3 className='text-lg font-semibold text-gray-900 mb-1'>Configure your profile</h3>
        <p className='text-sm text-gray-600'>Connect with Moises on LinkedIn.</p>
      </div>
    </a>
  </div>
);

export default ConfigureAccount;

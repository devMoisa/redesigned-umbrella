const SendAgain = () => (
  <div className='p-6 bg-white rounded-2xl shadow-sm'>
    <div className='flex justify-between items-start mb-6'>
      <h2 className='text-xl font-bold text-gray-900'>Enviar novamente</h2>
      <button className='text-gray-400 hover:text-gray-600'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
        </svg>
      </button>
    </div>
    <div className='flex items-center justify-center py-8'>
      <div className='text-center'>
        <div className='w-16 h-16 bg-[#142C8D] rounded-full flex items-center justify-center mx-auto mb-3'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
        </div>
        <span className='text-base font-medium text-gray-900'>Pesquisar</span>
      </div>
    </div>
  </div>
);

export default SendAgain;

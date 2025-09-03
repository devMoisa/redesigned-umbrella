import { FileText, Plus, ArrowUpDown, Download, MoreHorizontal } from 'lucide-react';

const QuickActions = () => (
  <div className='p-6 bg-white rounded-2xl shadow-sm'>
    <div className='grid grid-cols-5 gap-4 text-center'>
      <button className='flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors'>
        <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2'>
          <FileText className='w-6 h-6 text-gray-600' />
        </div>
        <span className='text-xs text-gray-700'>Create invoice</span>
      </button>
      <button className='flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors'>
        <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2'>
          <Plus className='w-6 h-6 text-gray-600' />
        </div>
        <span className='text-xs text-gray-700'>Add card or bank account</span>
      </button>
      <button className='flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors'>
        <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2'>
          <ArrowUpDown className='w-6 h-6 text-gray-600' />
        </div>
        <span className='text-xs text-gray-700'>Transfer funds</span>
      </button>
      <button className='flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors'>
        <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2'>
          <Download className='w-6 h-6 text-gray-600' />
        </div>
        <span className='text-xs text-gray-700'>Download new app</span>
      </button>
      <button className='flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors'>
        <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2'>
          <MoreHorizontal className='w-6 h-6 text-gray-600' />
        </div>
        <span className='text-xs text-gray-700'>More</span>
      </button>
    </div>
  </div>
);

export default QuickActions;

import ActionButtons from './components/ActionButtons';
import ConfigureAccount from './components/ConfigureAccount';
import Container from './components/Container';
import Navbar from './components/Navbar';
import PaymentsReceived from './components/PaymentsReceived';
import PayPalBenefits from './components/PayPalBenefits';
import RecentActivities from './components/RecentActivities';
import TransactionHistory from './components/TransactionHistory';

export const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-100 font-sans'>
      <Navbar />
      <Container className='py-8'>
        <div className='flex flex-col lg:flex-row lg:space-x-8'>
          <div className='w-full lg:w-1/3 space-y-6 mb-8 lg:mb-0'>
            <PayPalBenefits />
            <ConfigureAccount />
            <PaymentsReceived />
            <RecentActivities />
          </div>

          <div className='w-full lg:w-2/3 space-y-6'>
            <ActionButtons />
            <TransactionHistory />
          </div>
        </div>
      </Container>
    </div>
  );
};

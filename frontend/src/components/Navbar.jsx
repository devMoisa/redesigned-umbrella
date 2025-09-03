import Container from './Container';
import { Bell, Settings } from 'lucide-react';

const navLinks = [
  {
    to: '/',
    label: 'Home',
    type: 'INTERNAL',
  },
  {
    to: 'https://www.linkedin.com/in/devmoisa/',
    label: 'LinkedIn',
    type: 'EXTERNAL',
  },
  {
    to: 'https://github.com/devMoisa',
    label: 'GitHub',
    type: 'EXTERNAL',
  },
];

const Navbar = () => (
  <nav className='bg-[#142C8D] text-white'>
    <Container>
      <div className='flex items-center justify-between py-4'>
        <div className='flex items-center space-x-8'>
          <img src='./logo.png' alt='PayPal Logo' />
          {navLinks.map((link) => {
            if (link.type === 'EXTERNAL') {
              return (
                <a key={link.to} href={link.to} target='_blank' rel='noopener noreferrer' className='px-4 py-2 hover:bg-white hover:text-[#142C8D] rounded-full transition-colors'>
                  {link.label}
                </a>
              );
            }
            return (
              <button key={link.to} onClick={() => window.open(link.to, '_blank')} className='px-4 py-2 hover:bg-white hover:text-[#142C8D] rounded-full transition-colors'>
                {link.label}
              </button>
            );
          })}
        </div>
        <div className='flex items-center space-x-4'>
          <button className='p-2 hover:bg-white hover:text-[#142C8D] rounded-full transition-colors'>
            <Bell className='h-6 w-6' />
          </button>
          <button className='p-2 hover:bg-white hover:text-[#142C8D] rounded-full transition-colors'>
            <Settings className='h-6 w-6' />
          </button>
          <button className='px-4 py-2 rounded-full border border-white hover:bg-white hover:text-[#142C8D] transition-colors'>Exit</button>
        </div>
      </div>
    </Container>
  </nav>
);

export default Navbar;

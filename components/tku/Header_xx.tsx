import Navigation_xx from '@/components/tku/Navigation_xx';
import Logo_xx from '@/components/tku/Logo_xx';

function Header_xx() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_xx />
        <Navigation_xx />
      </div>
    </header>
  );
}

export default Header_xx;

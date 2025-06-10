import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/cabin/logo.png';

function Logo_xx() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      <Image src={logo} height='60' width='60' alt='TKU Demo' />
      <span className='text-xl font-semibold text-primary-100'>
        TKU-1132 Demo
      </span>
    </Link>
  );
}

export default Logo_xx;

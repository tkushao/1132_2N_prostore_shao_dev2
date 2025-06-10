import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modetoggle_xx from './mode-toggle_xx';
import Menu_xx from './menu_xx';
import TKUDemoDrawer_xx from './tkudemo-drawer_xx';
// import CategoryDrawer_xx from './category-drawer_xx';

const Header_xx = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          {/* <CategoryDrawer_xx /> */}
          <TKUDemoDrawer_xx />
          <Link href='/' className='flex-start ml-4'>
            <Image
              src='/images/logo.svg'
              height={48}
              width={48}
              priority={true}
              alt={`${APP_NAME} logo`}
            />
          </Link>
        </div>
        <Menu_xx />
      </div>
    </header>
  );
};

export default Header_xx;

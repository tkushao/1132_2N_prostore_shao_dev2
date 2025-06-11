import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getAllCategories } from '@/lib/actions/product.actions_xx';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

const tkudemos = [
  {
    title: 'Cabins_xx',
    href: '/cabins_xx',
  },
  {
    title: 'Prostore_xx',
    href: '/prostore_xx',
  },
];

const TKUDemoDrawer_xx = async () => {
  const categories = await getAllCategories();
  const tkudemo = await tkudemos;
  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <Button variant='outline'>
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-full max-w-sm'>
        <DrawerHeader>
          <DrawerTitle>Select a tku demo</DrawerTitle>
          <div className='space-y-1 mt-4'>
            {tkudemo.map((x) => (
              <Button
                variant='ghost'
                className='w-full justify-start'
                key={x.title}
                asChild
              >
                <DrawerClose asChild>
                  <Link href={`${x.href}`}>{x.title}</Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default TKUDemoDrawer_xx;

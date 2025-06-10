import { Josefin_Sans } from 'next/font/google';
// import './globals.css';
import Header_xx from '@/components/cabins/Header_xx';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'The Wild Oasis - xx',
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function CabinLayout({ children }: any) {
  return (
    <>
      <div className='flex-1 px-8 py-12'>
        <Header_xx />
        <main className='max-w-7xl mx-auto w-full'>{children}</main>
      </div>
    </>
  );
}

import { Metadata } from 'next';
import Header_xx from '@/components/shared/header_xx';
import Footer_xx from '@/components/shared/footer_xx';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'tku_xx',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header_xx />
      <main className='flex-1 wrapper'>{children}</main>
      <Footer_xx />
      <Toaster />
    </div>
  );
}

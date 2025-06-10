import Image from 'next/image';
import loader from '@/assets/loader.gif';

const Loading_xx = () => {
  return (
    <div className='flex justify-center items-center h-lvh w-lvw'>
      <Image src={loader} height={150} width={150} alt='Loading...' />
    </div>
  );
};

export default Loading_xx;

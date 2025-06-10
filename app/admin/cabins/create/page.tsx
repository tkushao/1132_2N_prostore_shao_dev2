import { Metadata } from 'next';
import CreateCabinForm_xx from './create-cabin-form_xx';

export const metadata: Metadata = {
  title: 'Create Cabin',
};

const CreateCabinPage_xx = async () => {
  return (
    <>
      <h2 className='h2-bold'>Create Cabin</h2>
      <div className='my-8'>
        <CreateCabinForm_xx />
      </div>
    </>
  );
};
export default CreateCabinPage_xx;

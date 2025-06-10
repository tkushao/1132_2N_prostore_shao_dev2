import { Metadata } from 'next';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import ProfileForm_xx from './profile-form_xx';

export const metadata: Metadata = {
  title: 'Customer Profile',
};

const ProfilePage_xx = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className='max-w-md mx-auto space-y-4'>
        <h1 className='h2-bold'>Profile</h1>
        <ProfileForm_xx />
      </div>
    </SessionProvider>
  );
};

export default ProfilePage_xx;

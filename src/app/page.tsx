import { auth } from '@/server/auth';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/auth/logout-button';

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1>Authenticated</h1>
        <LogoutButton />
      </div>
    </div>
  );
}

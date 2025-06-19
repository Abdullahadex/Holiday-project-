import '../src/index.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Navbar() {
  const router = useRouter();
  const isAuthPage = router.pathname === '/auth';

  // Hide navbar on /auth
  if (isAuthPage) return null;

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dabbly_user_token');
      localStorage.removeItem('dabbly_user_email');
      localStorage.removeItem('dabbly_goals');
      router.push('/auth');
    }
  };

  const handleHome = () => {
    router.push('/');
  };

  return (
    <nav className="p-4 border-b border-white/20 flex justify-end items-center fixed w-full top-0 z-10 bg-black/80 backdrop-blur-lg">
      <div className="flex gap-8 items-center w-full justify-end">
        <button
          onClick={handleHome}
          className="text-white hover:text-white/80 font-medium px-4"
        >
          Home
        </button>
        <Link href="/dashboard" legacyBehavior>
          <a className="text-white hover:text-white/80 font-medium px-4 block">Dashboard</a>
        </Link>
        <Link href="/my-goals" legacyBehavior>
          <a className="text-white hover:text-white/80 font-medium px-4 block">My Goals</a>
        </Link>
        <button
          onClick={handleLogout}
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
} 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add('auth-page');
    document.documentElement.classList.add('auth-page');
    return () => {
      document.body.classList.remove('auth-page');
      document.documentElement.classList.remove('auth-page');
    };
  }, []);

  const handleAuth = () => {
    setError('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!isLogin && !username.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (isLogin) {
      // Simulate login: retrieve user by email
      const userData = localStorage.getItem(`dabbly_user_${email}`);
      if (!userData) {
        setError('No account found for this email. Please sign up.');
        return;
      }
      const user = JSON.parse(userData);
      if (user.password !== password) {
        setError('Incorrect password.');
        return;
      }
      localStorage.setItem('dabbly_user_token', 'mock_token_123');
      localStorage.setItem('dabbly_user_email', email);
      localStorage.setItem('dabbly_user_name', user.username);
      router.push('/');
    } else {
      // Sign up: store user info
      localStorage.setItem('dabbly_user_token', 'mock_token_123');
      localStorage.setItem('dabbly_user_email', email);
      localStorage.setItem('dabbly_user_name', username);
      localStorage.setItem(`dabbly_user_${email}`, JSON.stringify({ username, email, password }));
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black border border-white/20 p-12 sm:p-4 rounded-3xl shadow-2xl w-full max-w-md text-center"
      >
        <h2 className="text-3xl sm:text-xl font-black text-white mb-8">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
        {error && <div className="mb-4 text-red-400 font-semibold">{error}</div>}
        <div className="flex flex-col items-center space-y-4 mb-8 max-w-sm mx-auto w-full">
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white/10 border border-white/20 px-6 sm:px-4 py-4 sm:py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-lg sm:text-base w-full"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border border-white/20 px-6 sm:px-4 py-4 sm:py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-lg sm:text-base w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border border-white/20 px-6 sm:px-4 py-4 sm:py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-lg sm:text-base w-full"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAuth}
          className="bg-white text-black text-lg sm:text-base px-8 sm:px-4 py-4 sm:py-3 rounded-xl shadow-lg transition-all duration-300 font-black hover:bg-white/90 max-w-sm mx-auto w-full"
        >
          {isLogin ? 'Sign in' : 'Sign up'}
        </motion.button>
        <p className="mt-8 text-white/80 text-lg sm:text-base">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="text-white font-bold underline hover:text-white/80"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.div>
    </div>
  );
} 
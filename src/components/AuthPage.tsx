import { useState } from 'react';
import { motion } from 'framer-motion';

interface AuthPageProps {
  onLoginSuccess: () => void;
}

export default function AuthPage({ onLoginSuccess }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    // In a real app, you'd send these credentials to a backend for authentication/registration.
    // For this demonstration, we'll simulate success and store a mock user in localStorage.
    if (email && password) {
      localStorage.setItem('dabbly_user_token', 'mock_token_123');
      localStorage.setItem('dabbly_user_email', email);
      onLoginSuccess(); // Call the prop to update authentication status in App.tsx
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black border border-white/20 p-12 rounded-3xl shadow-2xl w-full max-w-xl text-center"
      >
        <h2 className="text-3xl font-black text-white mb-8">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAuth}
          className="w-full bg-white text-black text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 font-black hover:bg-white/90"
        >
          {isLogin ? 'Sign in' : 'Sign up'}
        </motion.button>

        <p className="mt-8 text-white/80">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-white font-bold underline hover:text-white/80"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.div>
    </div>
  );
} 
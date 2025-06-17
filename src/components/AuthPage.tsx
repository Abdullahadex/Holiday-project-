import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface AuthPageProps {
  onLoginSuccess: () => void;
}

export default function AuthPage({ onLoginSuccess }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-xl shadow-lg w-80 text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-72 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAuth}
          className="w-72 bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-lg shadow-md transition-all duration-200 font-semibold"
        >
          {isLogin ? 'Sign in' : 'Sign up'}
        </motion.button>

        <p className="mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-800 font-bold underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.div>
    </div>
  );
} 
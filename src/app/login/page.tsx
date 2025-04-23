'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '@/components/Loader';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader fullScreen />}
      <div className="flex flex-col justify-center items-center p-4 h-full">
        <div className="w-full space-y-6">
          <div className="text-center">
            <Image
              src="/instagram-logo.png"
              alt="Instagram Logo"
              width={120}
              height={35}
              className="mx-auto"
            />
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-600 bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              {error && (
                <div className="text-red-400 text-sm text-center">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader size="sm" />
                ) : (
                  'Log in'
                )}
              </button>
            </form>
          </div>

          <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm text-center">
            <p className="text-sm text-gray-300">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-purple-400 hover:text-purple-300 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 
'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import Loader from '@/components/Loader';

export default function Home() {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    try {
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <>
        {isLoading && <Loader fullScreen />}
        <div className="h-full flex flex-col">
          <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
            <div className="px-4">
              <div className="flex justify-between h-14">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-lg font-bold text-white">Stories</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-sm text-gray-300 hover:text-white disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader size="sm" /> : 'Log out'}
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-1 overflow-y-auto p-4">
            <div className="text-center mt-8">
              <h2 className="text-xl font-semibold text-white">Welcome to Stories</h2>
              <p className="mt-2 text-gray-400">Your stories feed will appear here soon.</p>
            </div>
          </main>
        </div>
      </>
    </ProtectedRoute>
  );
}

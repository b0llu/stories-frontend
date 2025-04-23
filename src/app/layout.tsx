import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stories App',
  description: 'Share your stories with the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen w-full flex items-center justify-center bg-[#080808]">
            <div className="phone-frame bg-white shadow-2xl rounded-[3rem] overflow-hidden">
              <div className="phone-notch" />
              <div className="phone-screen overflow-y-auto">
                {children}
              </div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

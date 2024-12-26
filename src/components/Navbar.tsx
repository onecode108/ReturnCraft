'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface NavbarProps {
  userName?: string;
}

export default function Navbar({ userName }: NavbarProps) {
  const router = useRouter();

  const handleLogout = () => {
    // 로그아웃 로직 구현 예정
    router.push('/signin');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            ReturnCraft
          </Link>
          
          <div className="flex items-center space-x-4">
            {userName && (
              <>
                <span className="text-gray-700">{userName}님 환영합니다</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  로그아웃
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 
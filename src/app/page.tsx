'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8 p-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl animate-fade-in">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
          ReturnCraft
        </h1>
        <h2 className="text-2xl text-gray-200 font-light tracking-wide">
          당신의 새로운 여정을 시작하세요
        </h2>
        <div className="flex gap-6 mt-4">
          <Link
            href="/signup"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            회원가입
          </Link>
          <Link
            href="/api/auth/signin"
            className="px-8 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

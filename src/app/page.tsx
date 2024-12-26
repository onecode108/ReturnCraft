'use client';

import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar userName="사용자" />
      <main className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-2xl font-bold">ReturnCraft 메인 페이지</h1>
        {/* 메인 페이지 컨텐츠 */}
      </main>
    </div>
  );
}

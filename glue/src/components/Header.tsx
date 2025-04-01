import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[60px] bg-[#c8ee74] flex items-center px-10">
      {/* 로고 */}
      <div className="text-red font-bold text-lg mr-10">GLUE</div>

      {/* 네비게이션 */}
      <nav className="flex items-center space-x-6 text-black">
        <a href="#" className="hover:underline">
          게시글
        </a>
        <a href="#" className="hover:underline">
          채팅
        </a>
        <a href="#" className="hover:underline">
          마이페이지
        </a>
      </nav>

      {/* 오른쪽에 배치할 요소(로그인 버튼) */}
      <div className="ml-auto">
        <button className="bg-[#92D589] text-white px-5 py-2 rounded hover:opacity-90 transition-opacity">
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;

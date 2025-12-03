'use client'; // 👈 1. 중요! useState를 쓰기 위해 클라이언트 컴포넌트로 선언

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // 👈 2. 아이콘 가져오기 (설치 안 했으면 npm install lucide-react)

export default function Header() {
  // 3. 메뉴가 열렸는지 닫혔는지 상태 관리 (false: 닫힘, true: 열림)
  const [isOpen, setIsOpen] = useState(false);

  // 4. 메뉴 토글 함수
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 5. 메뉴 닫기 함수 (링크 클릭 시 메뉴 닫히게)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-base-white/80 sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md transition-colors dark:border-gray-800 dark:bg-gray-950/80">
      {/* 컨테이너 */}
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-[100px]">
        {/* 로고 */}
        <div className="md:text-h3 cursor-pointer text-xl font-bold text-gray-900 dark:text-white">
          <Link href="/" onClick={closeMenu}>
            승주's Portfolio
          </Link>
        </div>

        {/* 💻 데스크탑 메뉴 (md 이상일 때만 보임) */}
        <nav className="text-body-1 hidden gap-10 md:flex dark:text-gray-100">
          <Link href="#about" className="transition-colors hover:text-emerald-500">
            About
          </Link>
          <Link href="#skills" className="transition-colors hover:text-emerald-500">
            Skills
          </Link>
          <Link href="#projects" className="transition-colors hover:text-emerald-500">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-emerald-500">
            Contact
          </Link>
        </nav>

        {/* 📱 모바일 햄버거 버튼 (md 미만일 때만 보임) */}
        <button
          className="text-gray-900 md:hidden dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* 열려있으면 X 아이콘, 닫혀있으면 Menu(햄버거) 아이콘 */}
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 모바일 메뉴 드롭다운 (isOpen이 true일 때만 렌더링) */}
      {isOpen && (
        <div className="bg-base-white absolute top-16 left-0 w-full border-b border-gray-200 shadow-lg md:hidden dark:border-gray-800 dark:bg-gray-950">
          <nav className="text-body-1 flex flex-col gap-4 p-5 dark:text-gray-100">
            {/* 클릭하면 closeMenu가 실행되어 메뉴가 닫힘 */}
            <Link
              href="#about"
              onClick={closeMenu}
              className="py-2 transition-colors hover:text-emerald-500"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={closeMenu}
              className="py-2 transition-colors hover:text-emerald-500"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={closeMenu}
              className="py-2 transition-colors hover:text-emerald-500"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="py-2 transition-colors hover:text-emerald-500"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; // 👈 메일 아이콘 (Material Design)

export default function Footer() {
  return (
    // 1. 전체 배경 (Gray-950)
    <footer className="w-full bg-gray-950 py-16">
      {/* 2. 컨테이너 (1240px 제한) */}
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[100px]">
        {/* A. 상단 영역 (Main Content) */}
        <div className="mb-12 flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* 왼쪽: 로고 그룹 (Gap 12 적용) */}
          <div className="flex flex-col gap-3">
            {' '}
            {/* gap-3 = 12px */}
            <h3 className="text-h3 font-bold text-white">승주's Portfolio</h3>
            <p className="text-body-2 text-gray-400">사용자 경험을 중요시하는 개발자입니다.</p>
          </div>

          {/* 오른쪽: 소셜 아이콘 (Gap 12 적용) */}
          <div className="flex gap-3">
            {' '}
            {/* gap-3 = 12px */}
            <a
              href="https://github.com/ju1115/ju1115"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            {/* <a
              href="#"
              className="rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a> */}
            <a
              href="mailto:joo4123@naver.com"
              className="rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-white"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>

        {/* B. 구분선 */}
        <div className="mb-8 h-[1px] w-full bg-gray-800"></div>

        {/* C. 하단 카피라이트 */}
        <div className="text-body-3 text-center text-gray-600 md:text-left">
          © 2025 Lee Seungju. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

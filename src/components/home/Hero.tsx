import Image from 'next/image';
import { FaGithub, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'; // 아이콘 불러오기

export default function Hero() {
  return (
    <section
      id="hero"
      className="/* 데스크탑 높이 고정 */ flex w-full items-center bg-gray-50 py-20 md:h-[800px] md:py-0 dark:bg-gray-900"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[100px]">
        {/* 반응형 레이아웃: 모바일(세로) -> 데스크탑(가로, 양쪽 정렬) */}
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-0">
          {/* ==========================
              1. 왼쪽: 텍스트 & 정보 그룹 
             ========================== */}
          <div className="flex flex-col items-start gap-8 text-left md:max-w-[640px]">
            {' '}
            {/* 텍스트 너비 제한 */}
            {/* 메인 타이틀 (Heading/H1) */}
            <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-6xl dark:text-white">
              Creating
              <br />
              Digital Experiences
            </h1>
            {/* 소개글 (Body/1) */}
            <div className="text-body-1 space-y-1 text-gray-600 dark:text-gray-400">
              <p>안녕하세요, 도전하는 개발자입니다.</p>
              <p>
                저는 백엔드 개발자입니다. docker 기반의 infrastructure 아키텍처 중심의 설계를
                고민하고
              </p>
              <p>적용하기 위해 고민하는 개발자입니다. 새로운 기술, 환경으로의 도전을 좋아합니다.</p>
            </div>
            {/* 아이콘 리스트 정보 (피그마 디자인 반영) */}
            <div className="mt-2 flex flex-col gap-3">
              {/* Github */}
              <a
                href="https://github.com/ju1115"
                target="_blank"
                rel="noreferrer"
                className="flex cursor-pointer items-center gap-3 text-gray-700 transition-colors hover:text-emerald-500 dark:text-gray-300"
              >
                <FaGithub size={20} />
                <span className="font-medium">GitHub 확인하기</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt size={20} className="text-gray-500" />
                <span>서울, 대한민국</span>
              </div>

              {/* Status (초록색 체크) */}
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaCheckCircle size={20} className="text-emerald-500" />
                <span>Available for new Project</span>
              </div>
            </div>
          </div>

          {/* ==========================
              2. 오른쪽: 프로필 이미지 (Offset 효과)
             ========================== */}
          <div className="relative aspect-square w-full max-w-[400px] md:aspect-[4/5]">
            {/* 뒤에 깔리는 그림자 박스 (Absolute) */}
            <div className="absolute top-4 left-4 -z-10 h-full w-full rounded-[32px] bg-gray-200 dark:bg-gray-800"></div>

            {/* 실제 사진 (Relative) */}
            <div className="relative h-full w-full overflow-hidden rounded-[32px] shadow-xl">
              <Image src="/" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

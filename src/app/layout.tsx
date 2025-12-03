import type { Metadata } from 'next';
import './globals.css'; // 👈 우리가 만든 스타일 파일 (여기에 폰트 설정 다 있음)
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Seungju's Portfolio", // 👈 브라우저 탭 이름 수정
  description: 'Backend Developer Portfolio', // 👈 설명 수정
  icons: {
    icon: '/favicon.ico', // (나중에 파비콘 넣을 때 사용)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      {/* 👈 en -> ko (한국어 사이트 명시) */}
      <body className="antialiased">
        {/* 1. Geist 폰트 변수 제거함 (우리는 globals.css에서 Pretendard를 body에 직접 적용했으므로)
          2. antialiased: 폰트를 부드럽게 보여주는 Tailwind 클래스 (유지)
        */}
        <Header /> {/* 👈 헤더 고정 */}
        {/* 페이지 내용물 (Hero, About...)이 여기 들어옴 */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

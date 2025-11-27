/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Static Export 모드 (HTML로 빌드)
  output: "export",

  // 2. 이미지 최적화 끄기 (GitHub Pages 호환용)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// next.config.js
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export", // 이 줄을 반드시 추가하세요!
//   // images: { unoptimized: true }, // 정적 호스팅 시 이미지 최적화 기능을 끌 때 사용 (필요시)
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // 이 줄을 추가합니다.
};

export default nextConfig;

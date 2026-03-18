import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // REMOVA a linha do basePath se o site for o principal do seu perfil
};

export default nextConfig;
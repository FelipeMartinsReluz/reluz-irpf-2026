import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Essencial para o GitHub Pages
  basePath: '/FelipeMartinsReluz.github.io', // <-- TROQUE PELO NOME DO SEU REPO (ex: /irpf-site)
  images: {
    unoptimized: true, // O GitHub Pages não suporta a otimização de imagens padrão do Next
  },
};

export default nextConfig;
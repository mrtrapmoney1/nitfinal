import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export compatible — pages use generateStaticParams or default static
  // ISR on content pages via revalidate exports
  images: {
    remotePatterns: [],
  },
  // Trailing slash off (URLs: /about not /about/)
  trailingSlash: false,
};

export default nextConfig;

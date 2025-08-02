/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'flagcdn.com', 
        'images.credly.com'
      ],
      formats: ['image/webp', 'image/avif'], // Enable WebP and AVIF formats for optimization
    },
  };
  
  export default nextConfig;
  
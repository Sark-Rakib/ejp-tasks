/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "via.placeholder.com",
      "encrypted-tbn0.gstatic.com",
      "i.ibb.co.com",
    ], // add all remote domains you use
  },
};

export default nextConfig;

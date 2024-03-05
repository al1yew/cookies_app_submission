/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

//npm run build
//out
//NETLIFY_NEXT_PLUGIN_SKIP = true

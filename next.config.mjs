/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "default",
  },
};

export default nextConfig;

//npm run build
//out
//NETLIFY_NEXT_PLUGIN_SKIP = true

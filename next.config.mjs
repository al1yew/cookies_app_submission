/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: [
    {
      protocol: "http",
      hostname: "localhost",
      port: "3000",
      pathname: "/images/**",
    },
    {
      protocol: "https",
      hostname: "<YOUR SITE URL>.com",
      port: "",
      pathname: "/images/**",
    },
  ],
};

export default nextConfig;

//npm run build
//out
//NETLIFY_NEXT_PLUGIN_SKIP = true

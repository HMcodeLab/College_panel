import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "sbs.ac.in",
      "storage.googleapis.com",
      "ptuexams.in",
      "hoping-minds.s3.ap-south-1.amazonaws.com",
      "drdy957pjga3n.cloudfront.net",
      "youtu.be",
      "images.app.goo.gl",
      "upload.wikimedia.org",
      "www.usnews.com",
      "cdn.gotresumebuilder.com",
      "cdn.sites.tapfiliate.com", // ✅ Add this line
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;

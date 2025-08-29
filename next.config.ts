const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cpawebsiteimages.blob.core.windows.net',
        pathname: '/**', // allow all paths
      },
    ],
  },
};

module.exports = nextConfig;

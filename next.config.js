module.exports = {
  // distDir: 'dist',
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

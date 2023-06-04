module.exports = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

export default {
  expo: {
    name: "daily-diet",
    slug: "daily-diet",
    version: "0.1.0",
    orientation: "portrait",

    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],

    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: process.env.APP_PACKAGE,
    },
    web: {
      favicon: "./assets/favicon.png",
    },

    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
  },
};

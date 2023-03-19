import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.gymrevenue.demo",
  appName: "GymRevenue Sales Demo",
  webDir: ".output/public",
  bundledWebRuntime: false,
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
  },
};

export default config;

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.webbitech.app',
  appName: 'webbitech',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;

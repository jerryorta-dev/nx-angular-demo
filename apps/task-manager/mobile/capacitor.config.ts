import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taskmanager.app',
  appName: 'Task Manager',
  backgroundColor: '#06090f',
  // "bundledWebRuntime": true,
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000,
      backgroundColor: '#06090f',
      launchAutoHide: true
    }
  },
  server: {
    url: 'https://cnn.com'
  }
  // webDir: 'www',
};
export default config;

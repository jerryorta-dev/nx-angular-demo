import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  'appId': 'com.taskmanager.app',
  'appName': 'task-manager',
  'bundledWebRuntime': false,
  //  "webDir": "dist",
  server: {
    url: 'https://cnn.com/'
  },
  'plugins': {
    'SplashScreen': {
      'launchShowDuration': 0
    }
  }
};

export default config;

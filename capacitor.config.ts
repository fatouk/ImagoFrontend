import { CapacitorConfig } from '@capacitor/cli';

const config: MyCapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Imago',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'assets/splash.png',
      splashFullScreen: true,
      splashImmersive: false,
      splashUseLogo: false,
      iosSplashHeader: true,
      webSplashBackgroundColor: '#ffffff',
      webSplashFullScreen: true,
      webSplashCss: 'body { background-color: #ffffff; }',
      webSplashResize: 'contain',
      webSplashResourceName: 'assets/splash.png',
      webSplashViewportWidth: 360,
      webSplashViewportHeight: 640,
    },
  },
  server: {
    androidScheme: 'https'
  }
};


interface MyCapacitorConfig extends CapacitorConfig {
  plugins: {
    SplashScreen: {
      launchShowDuration: number;
      backgroundColor: string;
      androidSplashResourceName: string;
      splashFullScreen: boolean;
      splashImmersive: boolean;
      splashUseLogo: boolean;
      iosSplashHeader: boolean;
      webSplashBackgroundColor: string;
      webSplashFullScreen: boolean;
      webSplashCss: string;
      webSplashResize: string;
      webSplashResourceName: string;
      webSplashViewportWidth: number;
      webSplashViewportHeight: number;
    };
  };
}
export default config;

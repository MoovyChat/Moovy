export {};
declare global {
  interface Window {
    netflix: {
      appContext?: {
        state: {
          playerApp: {
            getAPI: any;
          };
        };
        getPlayerApp: () => any;
      };
    };
  }
}

declare module '@coffeeandfun/google-profanity-words';

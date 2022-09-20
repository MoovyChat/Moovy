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
      };
    };
  }
}

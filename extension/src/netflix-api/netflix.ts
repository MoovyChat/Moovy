interface Netflix {
  appContext?: {
    state: {
      playerApp: {
        getAPI: any;
      };
    };
  };
}

declare var goban: Netflix;

goban = window['netflix'];

console.log('goban', goban);

export {};

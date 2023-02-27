export interface OptionsLocalStorage {
  blobURL?: string[];
  resolution?: string;
  videoType?: string;
  videoDuration?: string;
  videoFormat?: string;
  isRecording?: boolean;
  recordTime?: number;
}
export type OptionsLocalStorageKeys = keyof OptionsLocalStorage;

// export function setStoredRecordTime(recordTime: number): Promise<void> {
//   const vals: OptionsLocalStorage = {
//     recordTime,
//   };
//   return new Promise((resolve) => {
//     chrome.storage.local.set(vals, () => {
//       resolve();
//     });
//   });
// }

// export function getStoredRecordTime(): Promise<number> {
//   const keys: OptionsLocalStorageKeys[] = ['recordTime'];
//   return new Promise((resolve) => {
//     chrome.storage.local.get(keys, (res) => {
//       resolve(res.recordTime ?? 0);
//     });
//   });
// }

export function setStoredIsRecording(isRecording: boolean): Promise<void> {
  const vals: OptionsLocalStorage = {
    isRecording,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredIsRecording(): Promise<boolean> {
  const keys: OptionsLocalStorageKeys[] = ['isRecording'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.isRecording ?? false);
    });
  });
}

export function setStoredBlobURL(blobURL: string[]): Promise<void> {
  const vals: OptionsLocalStorage = {
    blobURL,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredBlobURL(): Promise<string[]> {
  const keys: OptionsLocalStorageKeys[] = ['blobURL'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.blobURL ?? []);
    });
  });
}

export function setStoredResolution(resolution: string): Promise<void> {
  const vals: OptionsLocalStorage = {
    resolution,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredResolution(): Promise<string> {
  const keys: OptionsLocalStorageKeys[] = ['resolution'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.resolution ?? '360p');
    });
  });
}

export function setStoredVideoDuration(videoDuration: string): Promise<void> {
  const vals: OptionsLocalStorage = {
    videoDuration,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredVideoDuration(): Promise<string> {
  const keys: OptionsLocalStorageKeys[] = ['videoDuration'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.videoDuration ?? '10sec');
    });
  });
}

// export function setStoredVideoType(videoType: string): Promise<void> {
//   const vals: OptionsLocalStorage = {
//     videoType,
//   };
//   return new Promise((resolve) => {
//     chrome.storage.local.set(vals, () => {
//       resolve();
//     });
//   });
// }

// export function getStoredVideoType(): Promise<string> {
//   const keys: OptionsLocalStorageKeys[] = ['videoType'];
//   return new Promise((resolve) => {
//     chrome.storage.local.get(keys, (res) => {
//       resolve(res.videoType ?? '');
//     });
//   });
// }

// export function setStoredVideoFormat(videoFormat: string): Promise<void> {
//   const vals: OptionsLocalStorage = {
//     videoFormat,
//   };
//   return new Promise((resolve) => {
//     chrome.storage.local.set(vals, () => {
//       resolve();
//     });
//   });
// }

// export function getStoredVideoFormat(): Promise<string> {
//   const keys: OptionsLocalStorageKeys[] = ['videoFormat'];
//   return new Promise((resolve) => {
//     chrome.storage.local.get(keys, (res) => {
//       resolve(res.videoFormat ?? 'video/webm');
//     });
//   });
// }

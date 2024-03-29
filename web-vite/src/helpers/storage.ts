import {
  User,
  borderType,
  filterType,
  videoFilterSettings,
} from "./interfaces";

// Used to communicate data between popup and content script
interface LocalStorage {
  user?: User;
  volume?: boolean;
  pause?: boolean;
  checked?: boolean;
  filters?: filterType[];
  filterText?: string;
  border?: borderType;
  customBorders?: borderType[];
  filterValues?: videoFilterSettings;
  resizeValue?: string;
}
type LocalStorageKeys = keyof LocalStorage;

export function setStoredUserLoginDetails(user: User): Promise<void> {
  const vals: LocalStorage = {
    user,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredUserLoginDetails(): Promise<User> {
  const keys: LocalStorageKeys[] = ["user"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.user ?? []);
    });
  });
}

export function setStoredVolumeStatus(volume: boolean): Promise<void> {
  const vals: LocalStorage = {
    volume,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredVolumeStatus(): Promise<boolean> {
  const keys: LocalStorageKeys[] = ["volume"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.volume ?? true);
    });
  });
}

export function setStoredPauseStatus(pause: boolean): Promise<void> {
  const vals: LocalStorage = {
    pause,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredPauseStatus(): Promise<boolean> {
  const keys: LocalStorageKeys[] = ["pause"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.pause ?? false);
    });
  });
}

export function setStoredResizeValue(resizeValue: string): Promise<void> {
  const vals: LocalStorage = {
    resizeValue,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredResizeValue(): Promise<string> {
  const keys: LocalStorageKeys[] = ["resizeValue"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.resizeValue ?? "100");
    });
  });
}

export function setStoredCheckedStatus(checked: boolean): Promise<void> {
  const vals: LocalStorage = {
    checked,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredCheckedStatus(): Promise<boolean> {
  const keys: LocalStorageKeys[] = ["checked"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.checked ?? true);
    });
  });
}

export function setStoredVideoFilters(filters: filterType[]): Promise<void> {
  const vals: LocalStorage = {
    filters,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredVideoFilters(): Promise<filterType[]> {
  const keys: LocalStorageKeys[] = ["filters"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.filters ?? []);
    });
  });
}

// export function setStoredVideoFilterText(filterText: string): Promise<void> {
//   const vals: LocalStorage = {
//     filterText,
//   };
//   return new Promise((resolve) => {
//     chrome.storage.local.set(vals, () => {
//       resolve();
//     });
//   });
// }

// export function getStoredVideoFilterText(): Promise<string> {
//   const keys: LocalStorageKeys[] = ['filterText'];
//   return new Promise((resolve) => {
//     chrome.storage.local.get(keys, (res) => {
//       resolve(res.filterText ?? 'none');
//     });
//   });
// }

export function setStoredBorder(border: borderType): Promise<void> {
  const vals: LocalStorage = {
    border,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredBorder(): Promise<borderType> {
  const keys: LocalStorageKeys[] = ["border"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.border ?? {});
    });
  });
}

export async function setStoredCustomBorder(border: borderType): Promise<void> {
  const customBorders = await getStoredCustomBorders();
  const newBorders = [border, ...customBorders];
  const uniqBorders = [
    ...new Map(newBorders.map((item) => [item["color"], item])).values(),
  ];
  if (uniqBorders.length > 10) {
    uniqBorders.pop();
  }
  const vals: LocalStorage = {
    customBorders: uniqBorders,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredCustomBorders(): Promise<borderType[]> {
  const keys: LocalStorageKeys[] = ["customBorders"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.customBorders ?? []);
    });
  });
}

export function setStoredFilterValues(
  filterValues: videoFilterSettings
): Promise<void> {
  const vals: LocalStorage = {
    filterValues,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredFilterValues(): Promise<videoFilterSettings> {
  const keys: LocalStorageKeys[] = ["filterValues"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.filterValues ?? undefined);
    });
  });
}

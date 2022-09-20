import { defaultUIValues } from './defaultValues';
import {
  User,
  filterType,
  borderType,
  videoFilterSettings,
  globalUIStyles,
} from './interfaces';

// Used to communicate data between popup and content script
export interface LocalStorage {
  user?: User;
  watched?: number;
  volume?: boolean;
  pause?: boolean;
  checked?: boolean;
  filters?: filterType[];
  filterText?: string;
  border?: borderType;
  filterValues?: videoFilterSettings;
  uiStyles?: globalUIStyles;
  chatIconPosition?: string;
}
export type LocalStorageKeys = keyof LocalStorage;

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
  const keys: LocalStorageKeys[] = ['user'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.user ?? []);
    });
  });
}

export function setStoredWatchedTitles(watched: number): Promise<void> {
  const vals: LocalStorage = {
    watched,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredWatchedTitles(): Promise<string> {
  const keys: LocalStorageKeys[] = ['watched'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.watched ?? []);
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
  const keys: LocalStorageKeys[] = ['volume'];
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
  const keys: LocalStorageKeys[] = ['pause'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.pause ?? false);
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
  const keys: LocalStorageKeys[] = ['checked'];
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
  const keys: LocalStorageKeys[] = ['filters'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.filters ?? []);
    });
  });
}

export function setStoredVideoFilterText(filterText: string): Promise<void> {
  const vals: LocalStorage = {
    filterText,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredVideoFilterText(): Promise<string> {
  const keys: LocalStorageKeys[] = ['filterText'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.filterText ?? 'none');
    });
  });
}

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
  const keys: LocalStorageKeys[] = ['border'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.borderType ?? {});
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
  const keys: LocalStorageKeys[] = ['border'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.filterValues ?? undefined);
    });
  });
}

export function setStoredGlobalUIStyles(
  uiStyles: globalUIStyles
): Promise<void> {
  const vals: LocalStorage = {
    uiStyles,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredGlobalUIStyles(): Promise<globalUIStyles> {
  const keys: LocalStorageKeys[] = ['uiStyles'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.uiStyles ?? defaultUIValues);
    });
  });
}

export function setStoredChatIconPosition(
  chatIconPosition: string
): Promise<void> {
  const vals: LocalStorage = {
    chatIconPosition,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredChatIconPosition(): Promise<string> {
  const keys: LocalStorageKeys[] = ['uiStyles'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.chatIconPosition ?? '');
    });
  });
}

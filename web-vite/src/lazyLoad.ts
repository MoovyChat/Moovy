import { ComponentType, lazy } from 'react';

import { IconType } from 'react-icons/lib';

export function lazyLoad(path: string, namedExport?: string) {
  return lazy(() => {
    const promise = import(/* @vite-ignore */ path);
    if (namedExport === null || namedExport === undefined) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}

export function lazyIconMd<T extends ComponentType<any>>(iconName: string): T {
  const Icon = lazy(() =>
    import('react-icons/md').then((module) => ({
      default: module[iconName] as IconType,
    }))
  );
  return Icon as unknown as T;
}

export function lazyIconFa<T extends ComponentType<any>>(iconName: string): T {
  const Icon = lazy(() =>
    import('react-icons/fa').then((module) => ({
      default: module[iconName] as IconType,
    }))
  );
  return Icon as unknown as T;
}

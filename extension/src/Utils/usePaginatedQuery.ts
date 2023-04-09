// Copyright 2023, Fernando Rojo. Free to use.

import { AnyVariables, TypedDocumentNode, UseQueryArgs, useQuery } from 'urql';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import deepEqual from 'react-fast-compare';

const useServerLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type Options<V extends AnyVariables = AnyVariables> = Omit<
  UseQueryArgs<V>,
  'query' | 'variables'
> & {
  variables: Omit<V, 'offset'>;
};
export function usePaginatedUrqlQuery<
  D,
  V extends { limit: number; offset: number } = {
    limit: number;
    offset: number;
  }
>(
  document: TypedDocumentNode<D, V>,
  options: Options<V>,
  { getLength }: { getLength: (data: D) => number }
) {
  const [page, setPage] = useState(1);
  const { limit } = options.variables;

  // @ts-expect-error i think it's fine, just generic stuff
  const [query, executeQuery] = useQuery<D, V>({
    query: document,
    ...options,
    variables: {
      ...options.variables,
      offset: (page - 1) * options.variables.limit,
    },
  });

  const { fetching, stale, data, error, operation } = query;

  const isFetchingMore = Boolean(
    query.stale &&
      query.data &&
      page > 1 &&
      getLength(query.data) === (page - 1) * limit
  );

  const canFetchMore = Boolean(
    !query.fetching && query.data && getLength(query.data) >= page * limit
  );

  const fetchMore = useCallback(
    () => canFetchMore && setPage((page) => page + 1),
    [canFetchMore]
  );

  const revalidate = useCallback(
    () => executeQuery({ requestPolicy: 'network-only' }),
    [executeQuery]
  );

  const pullToRefresh = useCallback(() => {
    revalidate();
    setPage(1);
  }, [revalidate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const variablesToCompare = {
    ...options.variables,
    offset: undefined,
  };

  const previousVariables = useRef(variablesToCompare);

  useServerLayoutEffect(
    function setFirstPageOnMeaningfulVariableChange() {
      if (!deepEqual(previousVariables.current, variablesToCompare)) {
        setPage(1);
      }
      previousVariables.current = variablesToCompare;
    },
    // this isn't a deep-equal check, but it at least is better than nothing
    // "fast-deep-equal" will do the most on most renders. idk a way around it
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object.values(variablesToCompare)
  );
  const [isPullingToRefresh, setPullingToRefresh] = useState(false);

  const timer = useRef<any>(0);

  const onPullToRefresh = useCallback(() => {
    clearTimeout(timer.current);
    setPullingToRefresh(true);
    executeQuery({
      requestPolicy: 'network-only',
    });
    new Promise<void>((resolve) => {
      timer.current = setTimeout(() => {
        clearTimeout(timer.current);
        resolve();
      }, 1000);
    })
      .catch()
      .finally(() => {
        setPullingToRefresh(false);
      });
  }, [executeQuery]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    []
  );

  return {
    fetching,
    stale,
    data,
    error,
    operation,
    isPullingToRefresh,
    onPullToRefresh,
    execute: useCallback(async () => {
      return executeQuery({
        requestPolicy: 'network-only',
      });
    }, [executeQuery]),
    canFetchMore,
    isFetchingMore,
    fetchMore,
    revalidate,
    pullToRefresh,
  };
}

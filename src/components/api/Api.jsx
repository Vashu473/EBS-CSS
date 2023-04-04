import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
  } from 'react-query';
  import {api}  from "./ApiSetup"
export const fetcher = ({ queryKey, pageParam }) => {
    const [url, params] = queryKey;
    return api
      .get(url, { params: { ...params, ...pageParam } })
      .then((res) => res.data);
  };
  

  export const useFetch = (url, params, config) => {
    return useQuery(
      [url, params],
      ({ queryKey, param }) => fetcher({ queryKey, param, meta: undefined }),
      {
        enabled: !!url,
        ...config,
      },
    );
  };

  const useGenericMutation = (func, url, params, updater) => {
    const queryClient = useQueryClient();
  
    return useMutation(func, {
      onError: (_err, _, context) => {
        queryClient.setQueryData([url, params], context);
      },
      onSettled: () => {
        queryClient.invalidateQueries([url, params]);
      },
      onSuccess: () => {
        if (updater) {
          updater();
        }
      },
    });
  };

  export const useLoadMore = (url, params) => {
    return useInfiniteQuery(
      [url, params],
      ({ queryKey, pageParam = 1 }) =>
        fetcher({ queryKey, pageParam, meta: undefined }),
      {
        getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
        getNextPageParam: (lastPage) => {
          return lastPage.nextId ?? false;
        },
      },
    );
  };
  

  export const useDelete = (url, params, updater) => {
    return useGenericMutation(() => api.delete(url), url, params, updater);
  };

  export const usePost = (url, params, updater) => {
    return useGenericMutation(
      (data) => api.post(url, data, params),
      url,
      params,
      updater,
    );
  };
  
  export const useUpdate = (url, params, updater) => {
    return useGenericMutation(
      (data) => api.patch(url, data),
      url,
      params,
      updater,
    );
  };
  export const usePut = (url, params, updater) => {
    return useGenericMutation(
      (data) => api.put(url, data, params),
      url,
      params,
      updater,
    );
  };
  
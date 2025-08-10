import { useQuery } from '@tanstack/react-query';

type FetchOptions = RequestInit & {
    queryKey?: readonly unknown[];
};

export function useFetch<T = any>(
    url: string,
    options?: FetchOptions
) {
    return useQuery<T>({
        queryKey: options?.queryKey ?? [url],
        queryFn: async () => {
            const res = await fetch(url, options);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        },
    });
}
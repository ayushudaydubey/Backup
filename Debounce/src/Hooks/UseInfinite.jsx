import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsers } from '../service/userApi'

export const useInfiniteUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam = 0 }) => getUsers({ pageParam }),
    getNextPageParam: (lastPage, allPages) => {
        const totalLoaded = allPages.flatMap(p => p.users).length

        if (totalLoaded >= lastPage.total) return undefined

        return lastPage.nextSkip

    }

  })
}
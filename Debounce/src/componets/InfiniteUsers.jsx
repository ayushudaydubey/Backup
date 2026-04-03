import React, { useCallback, useRef } from 'react'
import { useInfiniteUsers } from '../Hooks/UseInfinite'

const InfiniteUsers = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteUsers()

  const observer = useRef()

  const lastUserRef = useCallback((node) => {
    if (isFetchingNextPage) return

    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    })

    if (node) observer.current.observe(node)

  }, [isFetchingNextPage, hasNextPage, fetchNextPage])

  return (
    <div className='p-4'>
      <h2>Infinite users</h2>

      {data?.pages.map((page, i) =>
        page.users.map((user, index) => {
          const isLast =
            i === data.pages.length - 1 &&
            index === page.users.length - 1

          return (
            <p key={user.id} ref={isLast ? lastUserRef : null}>
              {user.username}
            </p>
          )
        })
      )}

      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  )
}

export default InfiniteUsers
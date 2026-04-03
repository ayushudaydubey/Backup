import React, { useState } from 'react'
import { useDebounce } from '../service/useDebounce'
import { useSearchUser } from '../Hooks/useSearch'

const Search = () => {
  const [search, setSearch] = useState("")
  const debouncedSearch  =  useDebounce(search,500)

  const {data:users, isLoading} = useSearchUser(debouncedSearch)

  return (
    <div className='p-4'>

      <input className='px-4 py-2 border rounded-xl ' type="text" placeholder='Search Users...' value={search}  onChange={(e)=>setSearch(e.target.value)} />

      {isLoading &&  <p>Searching...</p> }

      {
        users?.map(user=>(
          <p key={user.id}>
            {user.firstName} {user.lastName}
          </p>
        ))
      }
      
    </div>
  )
}

export default Search

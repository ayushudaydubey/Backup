import React from 'react'
import { useUsers } from '../Hooks/userData'

const UserList = () => {
const {data:users, isLoading,isError,error} = useUsers()

if(isLoading) return <p>Loading..........</p>
if(isError) return <p> Error  :  {error.message}</p>
  
  return (
    <div className='flex flex-wrap p-4 gap-8  ' >
   
      {
        users.map(user=>(
          <div className='p-4 border rounded-2xl' key={user.id}>
           <img className='w-22 h-22 rounded-4xl ' src={user.image} alt="" />
           <h3 className='text-xl'>{user.username}</h3>
           <h1 className='text-md'>  {user.firstName + user.lastName} </h1>
      
          </div>
        ))
      }

    </div>
  )
}

export default UserList
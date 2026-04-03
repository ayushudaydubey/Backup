import React from 'react'
import UserList from './componets/UserList'
import Search from './componets/Search'
import InfiniteUsers from './componets/InfiniteUsers'



const App = () => {
  return (
    <div>
       <Search />
      {/* <UserList/> */}
      <InfiniteUsers/>
      
    </div>
  )
}

export default App
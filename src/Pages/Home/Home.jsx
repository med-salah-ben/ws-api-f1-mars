import React from 'react'
import UsersList from '../../components/UsersList/UsersList'
import "./home.css"

const Home = ({users , loadUsers}) => {

  return (
    <div className='home'>
        <UsersList users={users} loadUsers={loadUsers} />
    </div>
  )
}

export default Home
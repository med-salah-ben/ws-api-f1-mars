import React from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from '../UserCard/UserCard'

import "./usersList.css"


const UsersList = ({users , loadUsers}) => {
    console.log("users : " , users )
    console.log("load : " , loadUsers)
  return (
    <div>
        {
            loadUsers ?(
                <>
                <h1>Loading</h1>
                <Spinner animation="border" variant="primary" />
                </>
            ):(
                users.map((el)=><UserCard user={el} key={el.id} />)
            )
        }
    </div>
  )
}

export default UsersList
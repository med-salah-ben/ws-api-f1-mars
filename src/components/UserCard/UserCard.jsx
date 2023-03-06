import React from 'react';
import { Card , ListGroup } from 'react-bootstrap';

import { Link  } from 'react-router-dom';

import "./userCard.css"

const UserCard = ({user}) => {
  return (
    <Link to={`/userdetails/${user.id}`}>
    <Card className='userCard'>
    <Card.Header> Name :   {user.name + " " + user.username} </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Email : {user.email}</ListGroup.Item>
      <ListGroup.Item>Phone : {user.phone} </ListGroup.Item>
      <ListGroup.Item>City : {user.address.city} </ListGroup.Item>
      <ListGroup.Item>Company : {user.company.name} </ListGroup.Item>
      <ListGroup.Item>WebSite : {user.website} </ListGroup.Item>
    </ListGroup>
  </Card>
  </Link>
  )
}

export default UserCard
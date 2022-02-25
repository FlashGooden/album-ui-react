import './UserListContainer.scss'
import React from 'react'
import UserCard from '../UserCard/UserCard'

export default function UserListContainer() {

  const userList = [
    {userName: 'Todd', company: 'company', website:'www.website.com', albumCount: 43, userPhoto: ''},
    {userName: 'Todd', company: 'company', website:'www.website.com', albumCount: 43, userPhoto: ''}
  ]

  return (
    <ul className='user-list-container'>
      { userList.map((user, key) => {
        return(
          <UserCard userInfo={user} key={key}/>
          )
      })}
    </ul>
  )
}

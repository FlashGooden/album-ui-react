import './UserListContainer.scss'
import React from 'react'
import UserCard from '../UserCard/UserCard'

export default function UserListContainer({users, userAlbums, userPhotos}) {

  const getAllUsers = () => users
  const getAllPhotos = () => userPhotos
  const getAllAlbums = () => userAlbums


  const GetUserPhoto = (user) => {

  }

  const getUserUrl = (user) => {

  }

  const getUserName = (user) => {

  }

  const getUserCompany = (user) => {

  }

  const getUserAlbumCount = (user) => {

  }

  const buildUserProfile = (user) => {

  }


  const userList = [
    {userName: 'Todd', company: 'Company Name', website:'www.website.com', albumCount: 43, userPhoto: ''},
    {userName: 'Todd', company: 'Company Name', website:'www.website.com', albumCount: 43, userPhoto: ''}
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

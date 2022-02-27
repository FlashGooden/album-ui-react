import './UserListContainer.scss'
import React from 'react'
import UserCard from '../UserCard/UserCard'

export default function UserListContainer({users, userAlbums, userPhotos}) {

  const getAllUsers = () => users
  const getAllPhotos = () => userPhotos
  const getAllAlbums = () => userAlbums

  const getUserAlbumCount = (albums) => albums.length
  const getUserName = (user) => user.name
  const getUserUrl = (user) => user.website

  console.log(users, userPhotos, userAlbums)
  const getUserPhoto = ({id}) => {
    console.log(id)
  }


  const getUserCompany = (user) => {

  }

  const getUserAlbums = ({id}) => {
    return userAlbums.data.filter((album) => album.userId === id)
  }


  const buildUserProfile = (user) => {
    const currentUser = users.data[1]
    const userName = getUserName(currentUser)
    const userAlbums = getUserAlbums(currentUser)
    const albumCount = getUserAlbumCount(userAlbums)
    const userUrl = getUserUrl(currentUser)


    // const userPhoto = getUserPhoto(currentUser)
    // console.log(userPhoto)
    return {userName, albumCount, userUrl}
  }

  console.log(buildUserProfile(1))

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

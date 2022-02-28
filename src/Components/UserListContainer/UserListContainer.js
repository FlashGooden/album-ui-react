import './UserListContainer.scss'
import {React, useState, useEffect} from 'react'
import UserCard from '../UserCard/UserCard'

export default function UserListContainer({users, userAlbums, userPhotos}) {

  const [userList, setUserList] = useState([])
  const getUserAlbumCount = (albums) => albums.length
  const getUserName = (user) => user.name
  const getUserUrl = (user) => user.website
  const getUserCompany = (user) => user.company.name

  const getUserAlbums = ({id}) => {
    return userAlbums.data.filter((album) => album.userId === id)
  }

  const getUserPhoto = (albums) => {
    const randomAlbum = albums[albums.length * Math.random() | 0]
    //TODO: Work on large dataSet, large array not persisted between refresh
    const getFirstMatchedPhotoUrl = userPhotos.data.find((photos) => randomAlbum.id === photos.albumId)
    return getFirstMatchedPhotoUrl.thumbnailUrl
  }

  const buildUserProfile = (user) => {
    const currentUser = user
    const userName = getUserName(currentUser)
    const userAlbums = getUserAlbums(currentUser)
    const albumCount = getUserAlbumCount(userAlbums)
    const userUrl = getUserUrl(currentUser)
    const userCompany = getUserCompany(currentUser)
    const userPhoto = getUserPhoto(userAlbums)

    return {userName, albumCount, userUrl, userCompany, userPhoto}
  }

  useEffect(() => {
    if(!users.data) return

    const userList = users.data.map((user) => buildUserProfile(user))
    setUserList(userList)

  },[users.data])

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

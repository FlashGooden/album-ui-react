import './UserCard.scss'
import React from 'react'
import User from '../User/User'

export default function UserCard({userInfo}) {

  const {userName, company, website, albumCount, userPhoto} = userInfo

  return (
    <li className='user__card'>
      <User
        userName={userName}
        company={company}
        website={website}
        albumCount={albumCount}
        userPhoto={userPhoto}
        />
    </li>
  )
}

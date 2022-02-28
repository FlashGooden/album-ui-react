import './UserCard.scss'
import React from 'react'
import User from '../User/User'

export default function UserCard({userInfo}) {

  const {userName, userCompany, userUrl, albumCount, userPhoto} = userInfo

  return (
    <li className='user__card'>
      <User
        userName={userName}
        company={userCompany}
        website={userUrl}
        albumCount={albumCount}
        userPhoto={userPhoto}
        />
    </li>
  )
}

import React from 'react'

export default function User({userName, company, website, albumCount, userPhoto}) {

  return (
    <div className='user'>
      <img className='user__image' alt='user' src={userPhoto} />
      <div className='user__info'>
        <p className="user__name">{userName}</p>
        <p className="user__company">{company}</p>
        <link rel="stylesheet" href={website} className="user__website" />
        <p className="user__album">{albumCount}</p>
      </div>
    </div>
  )
}

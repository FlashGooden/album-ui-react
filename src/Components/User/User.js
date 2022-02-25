import React from 'react'

export default function User() {
  return (
    <div className='user'>
      <img className='user__image' alt='user'></img>
      <div className='user__info'>
        <p className="user__name"></p>
        <p className="user__company"></p>
        <link rel="stylesheet" href="" className="user__website" />
        <p className="user__album"></p>
      </div>
    </div>
  )
}

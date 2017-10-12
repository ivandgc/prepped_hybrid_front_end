import React from 'react'

const UserProfile = ({user}) => {
  return(
    <ul>
      <li>Username: {user.username}</li>
      <li>E-Mail: {user.email}</li>
    </ul>
  )
}

export default UserProfile

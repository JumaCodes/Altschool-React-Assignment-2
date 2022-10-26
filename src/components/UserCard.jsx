import React from 'react'

const UserCard = ({ data }) => {
  return (
    <>
      {data.map((person, index) => (
        <div key={index} className='user__card padd__15'>
          <img src={person.picture.large} alt='' />
          <p>Name : <span>{person.name.first} {person.name.last}</span></p>
          <p>Address : <span>{person.location.street.number}, {person.location.street.name}</span></p>
          <p>Age : <span>{person.dob.age}</span></p>
          <p>Phone : <span>{person.phone}</span></p>
          <p>Username : <span>{person.login.username}</span></p>
        </div>
      ))}
    </>
  )
}

export default UserCard
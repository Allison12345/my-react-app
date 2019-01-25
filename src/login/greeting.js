import React from 'react'
import UserGreeting from './usergreeting'
import GuestGreeting from './guestgreeting'
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

export default Greeting
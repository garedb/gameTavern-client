import React from 'react'
import { Link } from 'react-router-dom'


const Nav = props => {
  const handleLogout = e => {
    e.preventDefault()
    // Remove the token from localstorage (or cookies)
    // Update the state of the App
    props.updateToken()
  }

  let links = (
    <span>
      <li>
        <Link to="/freeGames">Free Games</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </span>
  )

  // If the user is logged in, show profile page and logout links
  if (props.user) {
    links = (
      <span>
      <li>
        <Link to="/games">Games</Link>
      </li>
      <li>
        <Link to="/freeGames">Free Games</Link>
      </li>
      <li>
        <Link to="/viewUsers">Users</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <a href="/" onClick={handleLogout}>Logout</a>
      </li>
    </span>
    )
  }


  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {links}
      </ul>
    </nav>
  )
}

export default Nav

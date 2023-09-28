import { Link } from "react-router-dom"
import * as usersService from '../../utilities/users-service'
import styles from "./NavBar.module.css"


function NavBar(props) {

  const handleLogOut = () => {
    // Delegate to the users-service
    usersService.logOut();
    // Update state will also cause a re-render
    props.setUser(null);
  }

  return (
    <nav className={styles.Navbar}>
      <h1>Welcome, {props.user.name}</h1>
      <Link to="/game">Game Page</Link>
      &nbsp; | {" "}
      <Link to="/profile">Profile Page</Link>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

export default NavBar

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function DeleteUserForm({ user, setUser }) {
   const [credentials, setCredentials] = useState({
  email: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

const handleLogOut = () => {
  // Delegate to the users-service
  usersService.logOut();
  // Update state will also cause a re-render
  setUser(null);
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
    try {
      if (user.email === credentials.email) {
        await usersService.deleteUser(credentials);
      }
      handleLogOut()
    } catch(error) {
      console.log(error)
    }
  }

return (
    <div>
        <div className="form-container" >
          <h1>Delete Yo WHOLE Account</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <button type="submit" >Delete Account</button>
      </form>
      <p>{error}</p>
    </div>
    </div>
  )
}

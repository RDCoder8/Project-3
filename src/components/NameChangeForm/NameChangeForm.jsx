import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function NameChangeForm({setUser, user}) {
    const [credentials, setCredentials] = useState({
        name: '',
        id: user._id
      });
      const [error, setError] = useState('');
      
      function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
      }
      
      async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
          const userUpdated = await usersService.update(credentials);
          setUser(userUpdated);
        } catch {
          setError('Name Changed Failed');
        }
      }
  return (
    <div>
    <div className="form-container" >
        <h1>Change Yo Name</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
        <button type="submit">Change Name</button>
      </form>
    </div>
  </div>
  )
}

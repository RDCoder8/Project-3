import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function ImgChangeForm({setUser, user}) {
    const [credentials, setCredentials] = useState({
        profileimg: '',
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
          console.log(credentials.profileimg)
          const userUpdated = await usersService.updateImg(credentials);
          setUser(userUpdated);
        } catch {
          setError('Img Changed Failed');
        }
      }
  return (
    <div>
    <div className="form-container" >
        <h1>Set a profile image</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Image Link</label>
        <input type="text" name="profileimg" value={credentials.profileimg} onChange={handleChange} required />
        <button type="submit">Set profile image</button>
      </form>
    </div>
  </div>
  )
}

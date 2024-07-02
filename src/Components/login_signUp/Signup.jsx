import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const colorPalette = {
  light_pink: '#F5DAD2',
  pale_yellow: '#FCFFE0',
  muted_green: '#BACD92',
  grayish_teal: '#75A47F',
  off_white: '#F6F5F2',
  blush_pink: '#E1ACAC',
  cream: '#FFFFEC',
  rust: '#CA8787',
};

function Signup() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: colorPalette.light_pink }}>
      <div className='form_container p-5 rounded' style={{ backgroundColor: colorPalette.off_white }}>
        <form>
          <h3 style={{ color: colorPalette.blush_pink }}>Sign Up</h3>
          <div className='mb-2'>
            <div className='d-flex align-items-center'>
              <label htmlFor='photo' style={{ color: colorPalette.blush_pink, marginRight: '10px' }}>
                <i className='bi bi-camera-fill' style={{ fontSize: '1.5rem' }}></i>
              </label>
              <div style={{ flex: 1 }}>
                <input type='file' accept='image/*' onChange={handleFileChange} className='form-control' />
              </div>
            </div>
          </div>
          <div className='mb-2'>
            <label htmlFor='fname' style={{ color: colorPalette.blush_pink }}>First Name</label>
            <input type='text' placeholder='Enter First Name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor='lname' style={{ color: colorPalette.blush_pink }}>Last Name</label>
            <input type='text' placeholder='Enter Last Name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor='email' style={{ color: colorPalette.blush_pink }}>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor='password' style={{ color: colorPalette.blush_pink }}>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className='d-grid'>
            <Link to="/login">
              <button className='btn' style={{ backgroundColor: colorPalette.blush_pink }}>Sign Up</button>
            </Link>
          </div>

          <p className='text-right mt-2' style={{ color: colorPalette.blush_pink }}>
            Already Registered <Link to="/" style={{ color: colorPalette.rust }}>Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;

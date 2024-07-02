import React from 'react';
import '../style.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const colorPalette = {
    light_pink : '#F5DAD2', 
    pale_yellow: '#FCFFE0', 
    muted_green: '#BACD92', 
    grayish_teal: '#75A47F', 
    off_white:'#F6F5F2',
    blush_pink:'#E1ACAC',
    cream:'#FFFFEC',
    rust:'#CA8787'
  };
  
  function Login() {
    return (
      <div className='login template d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: colorPalette.light_pink }}>
       <div className=' form_container p-5 rounded' style={{  backgroundColor: colorPalette.off_white }}>
          <form>
            <h3 style={{ color: colorPalette.blush_pink }}>Log In</h3>
            <div className='mb-2'>
              <label htmlFor='email' style={{ color: colorPalette.blush_pink }}>Email</label>
              <input  type='email' placeholder='Enter Email' className='form-control' />
            </div>
            <div className='mb-2'>
              <label htmlFor='password' style={{ color: colorPalette.blush_pink }}>Password</label>
              <input type='password' placeholder='Enter Password' className='form-control' />
            </div>
            <div className='d-grid'>
              <Link to ="/home">
              <button className='btn ' style={{ backgroundColor: colorPalette.blush_pink }}>Log In</button>
              </Link>
             
            </div>
            
            <p className='text-right mt-2' style={{ color: colorPalette.blush_pink }}>
              Don't Have Account <Link to="/signup" style={{ color: colorPalette.rust }}>Sign Up</Link> 
            </p>
          </form>
        </div>
      </div>
    );
  }
export default Login
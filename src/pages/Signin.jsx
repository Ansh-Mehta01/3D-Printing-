import React from 'react';
import { Link } from 'react-router-dom';

// Assuming you have a function to handle sign-in and get the username
const username = Signin(); // Replace this with your actual sign-in logic
Signin(username);

setTimeout(() => {
  if (email.trim() === '' || password.trim() === '') {
    setSignupError('Please enter a valid email and password.');
  } else {
    localStorage.setItem('em',email);
    localStorage.setItem('pass',password);
    navigate('/login');
    console.log('Signing up with email:', email, 'and password:', password);
  } 
  setIsLoading(false);
},1000);


export default function Signin() {
  return (
    
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          // onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          // onChange={handleChange}
        />
         <input type="hidden" name="access_key" value="c6222b95-4af5-465d-a3fd-7b4574317ac7"></input>
      </form>
      <div className='mt-6' >
        <Link to={'/'}>
        <button type='submit' className='bg-blue-500 text-white p-3 rounded-lg'>
          Sign In
        </button>
        </Link>
        </div>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

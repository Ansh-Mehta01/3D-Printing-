import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [username, setUsername] = useState(null); // State to store the username

  // Function to handle sign-in
  const Signin = (username) => {
    setUsername(username);
  };

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          3D Printing
        </h1>

        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About Us
            </li>
          </Link>
          {username ? ( // Conditionally render username if it exists
            <li className='text-slate-700'>{username}</li>
          ) : (
            <Link to='/sign-in'>
              <li className='text-slate-700 hover:underline'>Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}

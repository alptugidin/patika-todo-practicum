import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '/redux/sessionSlice';

function Login() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '' && value.length > 3) {
      dispatch(setUsername(value));
      localStorage.setItem('session', JSON.stringify({ userName: value, nightMode: false }));
    }
  };

  return (
    <div className="bg-red-500 dark:bg-gray-700 w-fit rounded-lg mx-auto drop-shadow-lg flex p-5 gap-5">
      <p className="text-xl font-semibold text-gray-100">Username: </p>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-8 outline-none drop-shadow-lg bg-white rounded-[6px] pl-5 pr-[73px] text-red-500 font-semibold"
        />
      </form>
    </div>
  );
}

export default Login;

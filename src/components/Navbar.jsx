import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNightMode, setUsername } from '/redux/sessionSlice';
import { clearCache } from '/redux/activitySlice';

function Navbar() {
  const isNight = useSelector((state) => state.session.isNight);
  const userName = useSelector((state) => state.session.userName);
  const dispatch = useDispatch();

  const changeNightMode = () => {
    dispatch(setNightMode(!isNight));
    localStorage.setItem('session', JSON.stringify({ userName, nightMode: !isNight }));
  };

  const logout = () => {
    localStorage.setItem('session', JSON.stringify({ userName: null, nightMode: false }));
    dispatch(setUsername(null));
    dispatch(setNightMode(false));
    dispatch(clearCache());
  };

  return (
    <div className="absolute right-5 top-5 px-5 py-3 bg-red-500 dark:bg-gray-700 px-5 rounded-full drop-shadow-lg flex gap-7 overflow-hidden">
      {' '}
      <span className="font-semibold text-xl text-gray-100">{userName}</span>
      <button
        onClick={changeNightMode}
        type="button"
        className="outline-none"
      >

        <img
          src="/sun.svg"
          alt="sun"
          className={`absolute right-[60px] transition-all ${isNight ? '-bottom-[38px]' : 'bottom-[14px]'}`}
        />
        <img
          src="/moon.svg"
          alt="moon"
          className={`absolute right-[60px] transition-all ${isNight ? 'bottom-[14px]' : '-bottom-[38px]'}`}
        />

      </button>
      <button
        type="button"
        onClick={logout}
      >
        <img src="/logout.svg" alt="user" />
      </button>
    </div>
  );
}

export default Navbar;

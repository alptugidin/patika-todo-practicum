import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nightMode } from '/redux/nightModeSlice';

function Navbar() {
  const dispatch = useDispatch();
  const isNight = useSelector((state) => state.nightMode.isNight);
  const changeNightMode = () => {
    dispatch(nightMode());
  };

  return (
    <div className="absolute right-5 top-5 px-5 py-3 bg-red-600 dark:bg-gray-700 px-5 rounded-full drop-shadow-lg flex gap-7 overflow-hidden">
      {' '}
      <span className="font-semibold text-xl text-gray-100">User1</span>
      <button
        onClick={changeNightMode}
        type="button"
        className="outline-none"
      >

        <img
          src="/sun.svg"
          alt="sun"
          className={`absolute right-[60px] transition-all ${isNight ? '-top-[38px]' : 'top-[14px]'}`}
        />
        <img
          src="/moon.svg"
          alt="moon"
          className={`absolute right-[60px] transition-all ${isNight ? 'bottom-[14px]' : '-bottom-[38px]'}`}
        />

      </button>
      <img src="/logout.svg" alt="user" />
    </div>
  );
}

export default Navbar;

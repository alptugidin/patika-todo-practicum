import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/components/Navbar';
import Login from '@/components/Login';
import Todo from '@/components/Todo';
import { setIsLogged } from '/redux/sessionSlice';

function App() {
  const isNight = useSelector((state) => state.session.isNight);
  const isLogged = useSelector((state) => state.session.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('session') === null) {
      localStorage.setItem('session', JSON.stringify({
        userName: null,
        nightMode: false,
      }));
    } else {
      const session = JSON.parse(localStorage.getItem('session'));
      if (session.userName === null) {
        dispatch(setIsLogged(false));
      } else {
        dispatch(setIsLogged(true));
      }
    }
  }, []);

  return (
    <div className={`${isNight ? 'bgdark dark' : 'bgday'} transition-all`}>
      <div className="container mx-auto h-screen pt-52">
        {isLogged ? (
          <Todo />
        ) : (
          <>
            <Navbar />
            <Login />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

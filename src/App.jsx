import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/components/Navbar';
import Login from '@/components/Login';
import Todo from '@/components/Todo';
import { setNightMode, setUsername } from '/redux/sessionSlice';

function App() {
  const username = useSelector((state) => state.session.userName);
  const isNight = useSelector((state) => state.session.isNight);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('session') === null) {
      localStorage.setItem('session', JSON.stringify({
        userName: null,
        nightMode: false,
      }));
    } else {
      const storage = JSON.parse(localStorage.getItem('session'));
      dispatch(setUsername(storage.userName));
      dispatch(setNightMode(storage.nightMode));
    }
  }, []);

  return (
    <div className={`${isNight ? 'bgdark dark' : 'bgday'} transition-all`}>
      <div className="container mx-auto h-screen pt-52">
        {username !== null ? (
          <>
            <Navbar />
            <Todo />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default App;

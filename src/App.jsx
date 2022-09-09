import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import Input from '@/components/Input';
import List from '@/components/List';
import Navbar from '@/components/Navbar';
import loadingAnimation from '@/assets/lf30_editor_ezjhlfqj.json';

function ToDo() {
  const isLoading = useSelector((state) => state.todos.isLoading);
  return (
    <div className="bg-red-500 dark:bg-gray-700 w-[600px] rounded-lg mx-auto drop-shadow-lg">
      <div
        id="head"
        className="p-5"
      >
        <p className="text-2xl text-gray-100 text-center font-semibold">User's todo list</p>
      </div>
      <Input />
      {isLoading && <Lottie animationData={loadingAnimation} className="w-56 mx-auto opacity-70" />}
      <List />
    </div>
  );
}

function App() {
  const isNight = useSelector((state) => state.nightMode.isNight);

  return (
    <div className={`${isNight ? 'bgdark dark' : 'bgday'} transition-all`}>
      <div className="container mx-auto h-screen pt-52">
        <Navbar />
        <ToDo />
      </div>
    </div>
  );
}

export default App;

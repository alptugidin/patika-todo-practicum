import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import Input from '@/components/Input';
import loadingAnimation from '@/assets/lf30_editor_ezjhlfqj.json';
import List from '@/components/List';

function Todo() {
  const isLoading = useSelector((state) => state.todos.isLoading);
  const userName = useSelector((state) => state.session.userName);

  return (
    <div className="bg-red-500 dark:bg-gray-700 w-[600px] rounded-lg mx-auto drop-shadow-lg">
      <div
        id="head"
        className="p-5"
      >
        <p className="text-2xl text-gray-100 text-center font-semibold">
          {userName}
          's todo list
        </p>
      </div>
      <Input />
      {isLoading && <Lottie animationData={loadingAnimation} className="w-56 mx-auto opacity-70" />}
      <List />
    </div>
  );
}

export default Todo;

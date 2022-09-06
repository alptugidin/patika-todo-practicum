import React from 'react';
import Input from '@/components/Input';
import List from '@/components/List';

function ToDo() {
  return (
    <div className="bg-red-500 w-[600px] rounded-lg mx-auto mt-52 drop-shadow-lg">
      <div
        id="head"
        className="p-5"
      >
        <p className="text-2xl text-gray-100 text-center font-semibold">User's todo list</p>
      </div>
      <Input />
      <List />
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto h-screen">
      <ToDo />
    </div>
  );
}

export default App;

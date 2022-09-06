import React, { useState } from 'react';

function Input() {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(value);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-5">
      <form
        action=""
        onSubmit={handleSubmit}
        className="relative w-9/12 mx-auto"
      >
        <input
          type="text"
          placeholder="Activity"
          onChange={handleOnChange}
          value={value}
          className="w-full h-10 outline-none drop-shadow-lg bg-white rounded-full pl-5 pr-[73px] text-red-500 font-semibold"
        />
        <button
          type="button"
          className="text-white bg-opacity-70 font-semibold absolute right-0 bg-red-500 h-9 px-5 mt-0.5 mr-0.5 rounded-full transition-all hover:bg-red-500"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;

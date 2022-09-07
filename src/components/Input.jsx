import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTodos } from '/redux/activitySlice';
import activity from '@/components/Activity';

function Input() {
  const [value, setValue] = useState('');
  const [popup, setPopup] = useState(false);

  const dispatch = useDispatch();
  const activities = useSelector((state) => state.todos.activities);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length >= 3 && value.length !== 0) {
      if (activities.some((item) => item.content === value)) {
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
        }, 1500);
        return;
      }
      dispatch(postTodos({ content: value }));
      setValue('');
    }
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-5">
      <div
        id="popup"
        className={`absolute left-0 right-0 ml-auto mr-auto bg-white text-red-600 px-3 py-2 rounded-full -top-48 w-44 text-center font-semibold transition-all pointer-events-none ${popup ? 'opacity-100' : 'opacity-50 -top-96'}`}
      >
        <p>Already on the list!</p>
      </div>
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

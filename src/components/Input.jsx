import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTodos, triggerWarning } from '/redux/activitySlice';
import activity from '@/components/Activity';
import WarningPopUp from '@/components/WarningPopUp';

function Input() {
  const [value, setValue] = useState('');
  // const [isWarning, setWarning] = useState(false);
  const isWarning = useSelector((state) => state.todos.warning);
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.todos.activities);

  const addToList = () => {
    if (value.length >= 3 && value.length !== 0) {
      if (activities.some((item) => item.content === value)) {
        dispatch(triggerWarning(true));
        setTimeout(() => {
          dispatch(triggerWarning(false));
        }, 1500);
        return;
      }
      dispatch(postTodos({ content: value }));
      setValue('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList();
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    addToList();
  };

  return (
    <div className="p-5">
      <WarningPopUp warning={isWarning} />
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
          onClick={handleClick}
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

import React, { createRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodos } from '/redux/activitySlice';

function Activity({ activity }) {
  const dispatch = useDispatch();
  const [done, setDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(activity.content);

  const inputRef = createRef();
  const handleClick = () => {
    setDone(!done);
  };

  const remove = () => {
    dispatch(deleteTodos({ id: activity.id }));
    document.getElementById(activity.id).classList.add('animate-pulse');
    document.getElementById(activity.id).classList.add('opacity-50');
  };

  const edit = async () => {
    await setIsEditing(!isEditing);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.select();
    }
  }, [isEditing]);

  return (
    <div
      id={activity.id}
      className="activity-item bg-white bg-opacity-30 rounded-lg transition-all hover:bg-opacity-50 flex relative"
    >
      <button
        onClick={handleClick}
        type="button"
        className="bg-white w-6 h-6 mt-1.5 ml-1.5 rounded-full cursor-pointer outline-none"
      >
        {done && <img src="/done.svg" alt="done" className="w-4 ml-1 mt-1" />}
      </button>
      {isEditing ? (
        <div className=" text-xl px-2 py-1">
          <form onSubmit={handleOnSubmit}>
            <input
              ref={inputRef}
              value={value}
              onChange={handleOnChange}
              type="text"
              className="bg-white text-red-500 font-semibold outline-none rounded-sm w-[450px]"
            />
          </form>
        </div>
      ) : (
        <p className={`text-xl px-2 py-1 text-gray-100 font-semibold transition-all ${done ? 'line-through decoration-green-500' : ''}`}>
          {activity.content}
        </p>
      ) }

      <div className="button-div absolute right-1.5 top-1.5 hidden">
        <button
          onClick={edit}
          type="button"
          className="edit-button outline-none mr-1.5 hover:border-b-2"
        >
          <img src="/edit2.svg" alt="edit" />
        </button>
        <button
          onClick={remove}
          type="button"
          className="delete-button outline-none  hover:border-b-2"
        >
          <img src="/delete2.svg" alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default Activity;

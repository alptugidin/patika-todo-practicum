import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodos, putCompleted, putContent, triggerWarning,
} from '/redux/activitySlice';

function Activity({ activity }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(activity.content);
  const isWarning = useSelector((state) => state.todos.warning);
  const inputRef = createRef();

  const updateCompleted = async () => {
    dispatch(putCompleted({ id: activity.id, isCompleted: !activity.isCompleted }));
  };

  const remove = () => {
    dispatch(deleteTodos({ id: activity.id }));
    document.getElementById(activity.id).classList.add('animate-pulse');
    document.getElementById(activity.id).classList.add('pointer-events-none');
  };

  const editModeStatus = async () => {
    await setIsEditing(!isEditing);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const updateContent = (e) => {
    e.preventDefault();
    if (value.length >= 3 && value.length !== 0) {
      if (activity.content === value) {
        setIsEditing(false);
        return;
      }
      dispatch(putContent({ id: activity.id, content: value }));
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.select();
    }
    if (isWarning === true) {
      setTimeout(() => {
        dispatch(triggerWarning(false));
      }, 1500);
    }
  }, [isEditing, isWarning]);

  return (
    <div
      id={activity.id}
      className={`activity-item bg-white bg-opacity-30 rounded-lg transition-all hover:bg-opacity-50 flex relative ${(activity.onComplete || activity.onEdit) && 'animate-pulse pointer-events-none'}`}
    >
      <button
        onClick={updateCompleted}
        type="button"
        className="bg-white w-6 h-6 mt-1.5 ml-1.5 rounded-full cursor-pointer outline-none"
      >
        {activity.isCompleted && <img src="/done.svg" alt="done" className="w-4 ml-1 mt-1" />}
      </button>
      {isEditing ? (
        <div className=" text-xl px-2 py-1">
          <form onSubmit={updateContent}>
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
        <p className={`text-xl px-2 py-1 text-gray-100 font-semibold transition-all ${activity.isCompleted ? 'line-through decoration-green-500 opacity-60' : ''}`}>
          {activity.content}
        </p>
      ) }

      <div className="button-div absolute right-1.5 top-2 hidden">
        <button
          onClick={editModeStatus}
          type="button"
          className="edit-button outline-none mr-1.5 hover:border-b-2"
        >
          <img src="/edit.svg" alt="edit" className="" />
        </button>
        <button
          onClick={remove}
          type="button"
          className="delete-button outline-none hover:border-b-2"
        >
          <img src="/delete2.svg" alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default Activity;

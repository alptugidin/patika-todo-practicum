import React, { useState } from 'react';

function Activity({ activity }) {
  const [done, setDone] = useState(false);
  const handleClick = () => {
    setDone(!done);
  };
  return (
    <div
      className="activity-item bg-white bg-opacity-30 rounded-lg transition-all hover:bg-opacity-50 flex relative"
    >
      <button
        onClick={handleClick}
        type="button"
        className="bg-white w-6 h-6 mt-1.5 ml-1.5 rounded-full cursor-pointer outline-none"
      >
        {done && <img src="/done.svg" alt="done" className="w-4 ml-1 mt-1" />}
      </button>
      <p className={`text-xl px-2 py-1 text-gray-100 font-semibold transition-all ${done ? 'line-through decoration-green-500' : ''}`}>
        {activity.content}
      </p>

      <div className="button-div absolute right-1.5 top-1.5 hidden">
        <button type="button" className="edit-button outline-none mr-1.5 hover:border-b-2">
          <img src="/edit2.svg" alt="" />
        </button>
        <button type="button" className="delete-button outline-none  hover:border-b-2">
          <img src="/delete2.svg" alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default Activity;

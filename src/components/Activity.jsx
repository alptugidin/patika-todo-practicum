import React, { useState } from 'react';

function Activity({ activity }) {
  const [done, setDone] = useState(false);
  const handleClick = () => {
    setDone(!done);
  };
  return (
    <div
      className="bg-white bg-opacity-30 rounded-lg transition-all hover:bg-opacity-50 flex"
    >
      <button
        onClick={handleClick}
        type="button"
        className="bg-white w-6 h-6 mt-1.5 ml-1.5 rounded-full cursor-pointer outline-none"
      >
        {done && <img src="/done.svg" alt="done" className="w-4 ml-1 mt-1" />}
      </button>
      <p className="text-xl px-2 py-1 text-gray-100 font-semibold">
        {activity.content}
      </p>
    </div>
  );
}

export default Activity;

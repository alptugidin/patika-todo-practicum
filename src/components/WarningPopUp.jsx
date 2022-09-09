import React from 'react';

function WarningPopUp({ warning }) {
  return (
    <div
      id="popup"
      className={`absolute left-0 right-0 ml-auto mr-auto bg-white text-red-600 px-3 py-2 rounded-full -top-48 w-44 text-center font-semibold transition-all pointer-events-none ${warning ? 'opacity-100' : 'opacity-50 -top-96'}`}
    >
      <p>Already on the list!</p>
    </div>
  );
}

export default WarningPopUp;

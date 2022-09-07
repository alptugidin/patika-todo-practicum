import React from 'react';

function ListSkeleton() {
  return (
    <div className="activity-item bg-white bg-opacity-30 h-9 rounded-lg transition-all flex relative p-2">
      <div className="bg-white w-6 h-6 -mt-0.5 -ml-0.5 rounded-full animate-pulse" />
      <div className="w-1/3 bg-white rounded-lg opacity-80 ml-1.5 animate-pulse" />
    </div>
  );
}

export default ListSkeleton;

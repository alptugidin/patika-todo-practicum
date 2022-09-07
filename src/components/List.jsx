import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '/redux/activitySlice';
import Activity from '@/components/Activity';

function List() {
  const activities = useSelector((state) => state.todos.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    console.log(import.meta.env.MOCK_API);
  }, []);

  return (
    <div className="flex flex-col gap-2 px-2 pb-2">
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export default List;

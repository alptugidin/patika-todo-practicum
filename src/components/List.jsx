import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '/redux/activitySlice';
import Activity from '@/components/Activity';
import ListSkeleton from '@/components/ListSkeleton';

function List() {
  const activities = useSelector((state) => state.todos.activities);
  // const activities = [
  //   {
  //     content: 'asd',
  //     isCompleted: false,
  //     id: '5',
  //   },
  //   {
  //     content: 'qwe',
  //     isCompleted: false,
  //     id: '7',
  //   },
  //   {
  //     content: '123',
  //     isCompleted: false,
  //     id: '8',
  //   },
  // ];

  const isPosting = useSelector((state) => state.todos.isPosting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="flex flex-col gap-2 px-2 pb-2">
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
      {isPosting && <ListSkeleton />}
    </div>
  );
}

export default List;

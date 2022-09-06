import React from 'react';
import Activity from '@/components/Activity';

function List() {
  const activities = [
    {
      content: 'asfasfasf',
      isCompleted: false,
      id: '0',
    },
    {
      content: 'jikj',
      isCompleted: false,
      id: '4',
    },
    {
      content: 'kjkj',
      isCompleted: false,
      id: '6',
    },
    {
      content: 'asd',
      isCompleted: false,
      id: '7',
    },
    {
      content: 'afasfasfasf',
      isCompleted: false,
      id: '8',
    },
  ];

  return (
    <div className="flex flex-col gap-2 px-2 pb-2">
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}

    </div>
  );
}

export default List;

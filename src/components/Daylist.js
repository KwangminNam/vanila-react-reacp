import React from 'react';
import dummy from '../db/data.json'

const Daylist = () => {
  
  console.log(dummy.days)
  return (
    <ul className='list_day'>
      {dummy.days.map(item => (
        <li key={item.id}>Day{item.day}</li>
      ))}
      <li></li>
    </ul>
  );
};

export default Daylist;
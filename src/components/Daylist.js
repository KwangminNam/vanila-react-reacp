import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Daylist = () => {
  
  const days = useFetch('http://localhost:3002/days');

  return (
    <ul className='list_day'>
      {days.map(item => (
        <li key={item.id}>
          <Link to={`/day/${item.day}`}>Day{item.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Daylist;
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word, { Iword } from './Word';

const Day = () => {
  const {day} = useParams<{day:string}>();

  const words: Iword[] = useFetch(`http://localhost:3002/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading..</span>}
      <table>
        <tbody>
          {words.map(item=>(
            <Word item={item} key={item.id}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
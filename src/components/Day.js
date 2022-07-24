import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

const Day = () => {
  const {day} =useParams();

  const words = useFetch(`http://localhost:3002/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
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
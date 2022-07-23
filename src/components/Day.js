import React from 'react';
import dummy from '../db/data.json'

const Day = () => {

  const day = 1;
  const wordList = dummy.words.filter(item=>(
    item.day === day
  ))
  console.log(wordList)

  return (
    <>
      <table>
        <tbody>
          {wordList.map(item=>(
             <tr key={item.id}>
                <td>{item.eng}</td>
                <td>{item.kor}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
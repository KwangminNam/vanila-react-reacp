import React, { useState } from 'react';

const Word = ({item}) => {

  const [isShow , setIsShow ] = useState(false);
  const [isDone, setIsDone ] = useState(item.isDone);

  const toggleShow = (e)=>{
    e.preventDefault();
    setIsShow(!isShow);
  }

  const toggleDone = () =>{
    fetch(`http://localhost:3002/words/${item.id}`,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        ...item,
        isDone: !isDone,
      }),
    })
    .then(res=>{
      if(res.ok){
        setIsDone(!isDone);
      }
    })
  }

  return (
    <tr key={item.id} className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}/>
      </td>
      <td>{item.eng}</td>
      <td>{ isShow && item.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻{isShow ? "숨기기" : "보기"}</button>
        <button className='btn_del'>삭제하기</button>
      </td>
    </tr>
  );
};

export default Word;
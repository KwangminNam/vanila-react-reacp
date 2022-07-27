import React from 'react';
import useFetch from '../hooks/useFetch';

const CreateDay = () => {

  const days = useFetch("http://localhost:3002/days");
  const onSubmit = (e) =>{
    e.preventDefault();
    fetch(`http://localhost:3002/days`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        day: days.length + 1,
        isDone: false
      }),
    })
    .then(res=>{
      if(res.ok){
        alert("생성 완료!");
      }
    })
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}</h3>
      <button onClick={onSubmit}>Day 추가</button>
    </div>
  );
};

export default CreateDay;
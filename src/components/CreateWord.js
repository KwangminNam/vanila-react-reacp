import React, { useRef } from 'react';
import useFetch from '../hooks/useFetch';

const CreateWord = () => {

  const days = useFetch("http://localhost:3002/days");
  const onSubmit = (e) =>{
    e.preventDefault();
    fetch(`http://localhost:3002/words`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false
      }),
    })
    .then(res=>{
      if(res.ok){
        alert("생성 완료!");
      }
    })
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label label>Eng</label>
        <input type="text" placeholder='computer' ref={engRef} />
      </div>
      <div className="input_area">
        <label label>Kor</label>
        <input type="text" placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(item=>(
            <option key={item.id}>{item.day}</option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
    
  );
};

export default CreateWord;
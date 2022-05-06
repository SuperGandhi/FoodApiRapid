import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from "axios";




function App() {
  const [endPoint, setEndPoints]= useState('')
  const [container, setContainer] = useState([])

  useEffect(() => {
    fethMe()
  },[endPoint])

  const fethMe = () =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
      'X-RapidAPI-Key': '490574ce41mshbca8c481c71683bp1f17e6jsn17e91bcc55ac'
    }
  };
  
  fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q+${endPoint}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => {
      setContainer(data)
    })
    .catch(err => console.error(err));
}

  const onChangeHandler = (e)=>{
    setEndPoints(e.target.value)
  }

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler}/>
        <button type="submit">submit</button>
      </form>
      {container.map((item) => {
        return (
          <div>
            <img src={item.i.imageUrl} alt="" />
            <p>{item.l}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;

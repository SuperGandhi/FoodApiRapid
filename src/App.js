import React, { useState} from 'react';
import './App.css';
// import axios from "axios";






function App() {
  
  const [query, setQuery] = useState('')
  const [container,setContainer] = useState([])
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'd8818fa09emshcd4bed22312084fp14331djsn23e53f613ef5'
    }
  };
  
  fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
    .then(response => {
      return response.json();
    })
    .then(data =>{
      setContainer(data.hints)
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));


  
  return(
    <div>
       <form action="">
         <input type="text" />
         <button type='submit'>Submit</button>
       </form>
    </div>
  );
}

export default App;

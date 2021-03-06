import React, { useState, useEffect} from 'react';
import './App.css';







function App() {
  
  const [query, setQuery] = useState('')
  const [container,setContainer] = useState([])
  const [endPoint, setEndPoint] = useState('')

  useEffect(()=> {
    const options = {
      // 'method': 'GET',
      // headers: {
        //   'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
        //   'X-RapidAPI-Key': 'd8818fa09emshcd4bed22312084fp14331djsn23e53f613ef5'
        // }
      };
      
      fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr= + ${query}`, options)
      .then(response => {
        return response.json();
      })
      .then(data =>{
        setContainer(data.hints)
      })
      .then(response => console.log(response))
      .catch(err => console.error(err));
},[query])
      
      const onChangeHandler = (e) =>{
        setQuery(e.target.value)
      }

      const onSubmitHandler = e =>{
        e.preventDefault()
        setEndPoint(query)
      }
      
      
  return(
    <div>
       <form onSubmit={onSubmitHandler}>
         <input type="text" value={query} onChange={onChangeHandler}/>
         <button type='submit'>Submit</button>
       </form>
       <div className="element">
       {container.map((item)=> {
         return (
           <div className="element-div">
             <img src={item.food.image} alt="" />
             <p>{item.food.label}</p>
           </div>
         ) 
       })}
       </div>
    </div>
  );
}

export default App;

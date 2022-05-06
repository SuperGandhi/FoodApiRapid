import './App.css';


function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'd8818fa09emshcd4bed22312084fp14331djsn23e53f613ef5'
    }
  };
  
  fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
  return (
    <div className="App">

    </div>
  );
}

export default App;

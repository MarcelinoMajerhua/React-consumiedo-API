import React,{useState,useEffect} from 'react';
import './public/App.css';
import getGifs from './service/getGif';
import Gif from './components/Gif';


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {//esta funcion se ejecuta cuando se renderiza 
    getGifs({keyword:'programming'}).then(gifs=> setGifs(gifs))

    
  },[])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGig => 
          <Gif title={singleGig.title} url={singleGig.url} id={singleGig.id}/>
          )
        }
      </section>
    </div>
  );
}

export default App;

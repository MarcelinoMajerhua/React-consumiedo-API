import React,{useState,useEffect} from 'react';
import './public/App.css';
import {Link,Route} from 'wouter'
import ListGifs from './components/ListGifs';

function App() {

  return (
    <div className="App">
      <Link to='/gif/peru'>Gifs de Peru
      </Link>
      <Link to='/gif/rick'>Gifs de Rick
      </Link>
      <Link to='/gif/naruto'>Gifs de Naruto
      </Link>
      <section className="App-content">
        <Route
          component={ListGifs}
          path='/gif/:keyword'
        />
      </section>
    </div>
  );
}

export default App;

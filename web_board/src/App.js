import React from 'react';
import Window from './Components/Window/Window';
import Selector from './Components/Selector';
import './App.css';

function App() {
  return [<Window key={'winID'}></Window>,
  <Selector key={'selID'}></Selector>]
    
}

export default App;

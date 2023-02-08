import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import { ResponseContext } from './Context';


function App() {
  const [response,setResponse] = useState([])
  return (
    <div className="App">
      <ResponseContext.Provider value={{response,setResponse}}>

        <Home />

      </ResponseContext.Provider>  
    </div>
  );
}

export default App;

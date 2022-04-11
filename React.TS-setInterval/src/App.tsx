
import './App.css';

import { Timer } from './Components';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState<boolean>(false)

  const togglerFunction = () :void => {
  
       setToggle(!toggle);
  };

  return (
    <div className="App">
     <h2>{ toggle && <Timer/>}</h2>
     <button
     onClick={togglerFunction}
     >
       Toggle me
     </button>
    </div>
  );
}

export default App;

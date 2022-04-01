

import { useState } from 'react';
import { Item } from './Components';


function App() {
  
  const [ myState, setMyState] = useState<any>(10);

  const modifyState = (data: Event): any => {
    setMyState(data)
  };

  return (
    <div className="App">
      <h1> Hello state : {myState} </h1>
      <Item propertiesFunction={modifyState}/>
    </div>
  );
}

export default App;

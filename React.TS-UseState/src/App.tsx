
import './App.css';
import { useState } from 'react';
import { Item } from './Components';


function App() {

  console.log(`App updating : (re-)Rendering`);
  
  const [myState, setMyState] = useState(10);

  const modifyState = () => {
    setMyState(20);
};


  return (
    <div className="App">
      <h1>React x TypeScript</h1>
      <Item title={"Properties successfully"} txt={"PASSED"}/>
      <h2> My State : {myState}</h2>
    <button onClick={modifyState}>Change the state</button>
    </div>
  );
}

export default App;

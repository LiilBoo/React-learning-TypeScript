
import { ChangeEventHandler, useState } from 'react';


function App() {

  const [inputData, setInputData] = useState<any>(10);

  const changeInput : ChangeEventHandler<HTMLInputElement> = (event) => {
  
       console.log(event.target.value);
       setInputData(event.target.value)
       
  };

  return (
    <div className="App">
      <h1>I'm a H1</h1>
      <input 
      type="text" 
      value={inputData}
      onChange={changeInput}
      />
    </div>
  );
}

export default App;

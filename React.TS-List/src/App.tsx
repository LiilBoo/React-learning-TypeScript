import { useState } from 'react';


interface SuccessionCharacter {
  name: string;
}

function App() {

  const [dataArray, setDataArray] = useState<SuccessionCharacter[]>([
    {name: "Jody"},
    {name: "Tom"},
    {name: "Logan"},
    {name: "Shiv"},
    {name: "Kendall"},
    {name: "Roman"},
    {name: "Gerri"},
    {name: "Rava"},
    {name: "Connor"},
  ]);



  return (
    <div className="App">
      <h3>Dynamically created with map method which returns a new Array, hence why forEach wouldn't work because forEach just loops over element doesn't return anything, so I'd have undefined at each iteration</h3>
     { dataArray.map((item, index) => {
       console.log(index);
      return <p key={index}> Name : {item.name}</p>


     })}
     <h2>Here starts an Array of hardcoded JSX paragraph elements</h2>
     {[
     <p>Name : Karl</p>,
     <p>Name : Rupert Murdoch</p>,
     <p>Name : Succession</p>,
     <p>Name : Tabitha</p>,
    ]}
    </div>
  );
}

export default App;

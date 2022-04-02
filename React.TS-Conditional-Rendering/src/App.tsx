import  {useState } from "react";

function App() {
	
  const [toggle, setToggle] = useState<boolean>(true);

	const changeState = () => {
		setToggle(!toggle);
	};

	let toggleContent;
	let otherContent = <h2>we're true and short-cuited</h2>;

	if (toggle) {
		toggleContent = <h1>The state is truthy</h1>;
	} else {
		toggleContent = <h1>The state is falsy</h1>;
	}

  return (
    <div className="App">
      <h1>I'm a tsx h1</h1>
      {toggleContent}
      {toggle ? (
        <h2>otherContent says the state is true</h2>
      ) : (
        <h2>otherContent says the state is not true</h2>
      )}
      {toggle && otherContent}
      <button onClick={changeState}>Change the state</button>
    </div>
  )
}

export default App;

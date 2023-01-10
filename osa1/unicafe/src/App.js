const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


function App() {

  const handleClick = () => {
    console.log("click")
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClick} text={"good"} />
      <Button handleClick={handleClick} text={"neutral"} />
      <Button handleClick={handleClick} text={"bad"} />
    </div>
  );
}

export default App;

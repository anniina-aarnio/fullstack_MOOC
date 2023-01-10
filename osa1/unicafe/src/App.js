const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


function App() {
  return (
    <div>
      <Button handleClick={() => console.log("click")} text={"nappi"} />
    </div>
  );
}

export default App;

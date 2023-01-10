import { useState } from "react"

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


function App() {

  const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0
  })

  const handleClick = (which) => () => {
    let newFeedback = { ...feedback}
    newFeedback[which] = newFeedback[which] + 1
    setFeedback(newFeedback)
    console.log(newFeedback)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClick("good")} text={"good"} />
      <Button handleClick={handleClick("neutral")} text={"neutral"} />
      <Button handleClick={handleClick("bad")} text={"bad"} />
    </div>
  );
}

export default App;

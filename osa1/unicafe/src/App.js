import { useState } from "react"

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value}) => <div>{text} {value}</div>

const Statistics = ({ feedback }) => {
  let sum = feedback.good + feedback.neutral + feedback.bad

  if (sum == 0) {
    return <p>No feedback given</p>
  }

  let average = (feedback.good - feedback.bad) / sum
  let positive = feedback.good / sum * 100

  return (
    <div>
      <h2>statistics</h2>
      <StatisticsLine text={"good"} value={feedback.good} />
      <StatisticsLine text={"neutral"} value={feedback.neutral} />
      <StatisticsLine text={"bad"} value={feedback.bad} />
      <StatisticsLine text={"all"} value={sum} />
      <StatisticsLine text={"average"} value={average} />
      <StatisticsLine text={"positive"} value={String(positive) + "%"} />
    </div>
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
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClick("good")} text={"good"} />
      <Button handleClick={handleClick("neutral")} text={"neutral"} />
      <Button handleClick={handleClick("bad")} text={"bad"} />
      <Statistics feedback={feedback} />
    </div>
  );
}

export default App;

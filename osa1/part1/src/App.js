import { useState } from 'react'

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born {bornYear()}
      </p>
    </div>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Counter = (props) => {
  const [ counter, setCounter] = useState(props.start)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter -1)

  return (
    <div>
      <Display counter={counter} />
      <Button
        handleClick={increaseByOne}
        text={"plus"}
      />
      <Button
        handleClick={setToZero}
        text={"zero"}
      />
      <Button
        handleClick={decreaseByOne}
        text={"minus"}
      />
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika}/>
      <Hello name="JK" age={2023-1982} />
      <Counter start={0} />
    </>
  );
}

export default App;

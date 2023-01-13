import { useState } from 'react'
import Hello from './components/Hello'

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const LeftRightCounter = () => {

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAllClicks] = useState([])
 
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    // concat luo uuden taulukon, johon uusi alkio lisätty
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }

  return (
    <div>
      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text={"left"} />
        <Button handleClick={handleRightClick} text={"right"} />
        {clicks.right}
        <History allClicks={allClicks} />
      </div>
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
      <LeftRightCounter />
    </>
  );
}

export default App;

import { useState } from 'react'
import Button from './Button'

const Display = ({ counter }) => <div>{counter}</div>

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
export default Counter
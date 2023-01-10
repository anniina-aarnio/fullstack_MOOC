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

const Counter = (props) => {
  const [ counter, setCounter] = useState(props.start)


  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
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

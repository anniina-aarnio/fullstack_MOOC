import Counter from './components/Counter'
import Hello from './components/Hello'
import LeftRightCounter from './components/LeftRightCounter'

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

import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import Counter from './components/Counter'
import Hello from './components/Hello'
import LeftRightCounter from './components/LeftRightCounter'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
        console.log(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', notes.length, 'notes')


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
      <br />
      {notes.map((note) => <Note key={note.id} text={note.content} />)}
    </>
  );
}

export default App;

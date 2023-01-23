const Persons = ({ persons, filter, deleteObject }) => {
  return(
    <div>
    {persons
      .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map((person) =>
        <p key={person.name}>
          {person.name} {person.number} 
          <button onClick={() => deleteObject(person.id)}>delete</button>
        </p>
      )
    }
    </div>
  )
}

export default Persons
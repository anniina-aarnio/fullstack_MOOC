const Persons = ({ persons, filter }) => {
  console.log("")
  return(
    <div>
    {persons
      .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map((person) =>
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      )
    }
    </div>
  )
}

export default Persons
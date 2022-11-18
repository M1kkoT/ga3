import { useState } from 'react'

const PersonList = (props) => {
  const {list} = props
  return (
    <>
      <ul style={{listStyle: "none"}}>
        {list.map((person, i) => {return (
          <li key={i}>{person.name} {person.number}</li>
        )})}
      </ul>
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNum
    }

    const filtered = persons.filter(person => person.name === newName).pop()

    if(filtered){
      alert(`${newName} is already added to phonebook`)
    } 
    else{
      setPersons(persons.concat(person))
    }
    setNewName('')
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={({target}) => setNewName(target.value)}/>
        </div>
        <div>
          number: <input value={newNum} onChange={({target}) => setNewNum(target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <PersonList list={persons}/>
      </div>
    </div>
  )
}

export default App
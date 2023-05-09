import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import contacts from '../src/contacts.json'





function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(contact => !firstFive.includes(contact));

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    const updatedContacts = [...firstFive, randomContact];
    setFirstFive(updatedContacts);
    console.log(updatedContacts)
  };


  return (
    <div className="App">

    <button onClick={addRandomContact}>Add Random Contact</button>

    <h1>Iron Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscars?</th>
            <th>Emmy?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={firstFive[0].pictureUrl} alt={firstFive[0].name} /></td>
            <td><p>{firstFive[0].name}</p></td>
            <td><p>{firstFive[0].popularity}</p></td>
            <td><p>{firstFive[0].wonOscar ? '🏆' : '-'}</p></td>
            <td><p>{firstFive[0].wonEmmy ? '🏆' : '-'}</p></td>
          </tr>
          <tr>
            <td><img src={firstFive[1].pictureUrl} alt={firstFive[1].name} /></td>
            <td><p>{firstFive[1].name}</p></td>
            <td><p>{firstFive[1].popularity}</p></td>
            <td><p>{firstFive[1].wonOscar ? '🏆' : '-'}</p></td>
            <td><p>{firstFive[1].wonEmmy ? '🏆' : '-'}</p></td>
          </tr>
          <tr>
            <td><img src={firstFive[2].pictureUrl} alt={firstFive[2].name} /></td>
            <td><p>{firstFive[2].name}</p></td>
            <td><p>{firstFive[2].popularity}</p></td>
            <td><p>{firstFive[2].wonOscar ? '🏆' : '-'}</p></td>
            <td><p>{firstFive[2].wonEmmy ? '🏆' : '-'}</p></td>
          </tr>
          <tr>
            <td><img src={firstFive[3].pictureUrl} alt={firstFive[3].name} /></td>
            <td><p>{firstFive[3].name}</p></td>
            <td><p>{firstFive[3].popularity}</p></td>
            <td><p>{firstFive[3].wonOscar ? '🏆' : '-'}</p></td>
            <td><p>{firstFive[3].wonEmmy ? '🏆' : '-'}</p></td>
          </tr>
          <tr>
            <td><img src={firstFive[4].pictureUrl} alt={firstFive[4].name} /></td>
            <td><p>{firstFive[4].name}</p></td>
            <td><p>{firstFive[4].popularity}</p></td>
            <td><p>{firstFive[4].wonOscar ? '🏆' : '-'}</p></td>
            <td><p>{firstFive[4].wonEmmy ? '🏆' : '-'}</p></td>
          </tr>
        </tbody>

      </table>








    </div>
  )
}

export default App

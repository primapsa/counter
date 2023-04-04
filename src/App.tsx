import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const [password, setPassword] = useState<string>("")
type StudentType = {
  id: number
  name: string
}

type FriendsType = {
  [key: string]: Array<string>
}

const students: Array<StudentType> = [
  {id: 1, name: "Bob"},
  {id: 2, name: "Alex"},
  {id: 3, name: "Ann"},
  {id: 4, name: "Charley"},
]

const friends: FriendsType = {
  1: ["Oliver", "Jack", "Oscar",],
  2: ["Jack", "Lewis", "Thomas",],
  3: ["William", "Michael", "Lewis",],
  4: ["Oscar", "James", "William",],
}

const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
  const result: Array<string> = []

  friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)
  return result
}
export default App;

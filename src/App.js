import './App.css';

import { useState } from 'react';


function App() {

  const [out, setOut] = useState({name: '', age: ''});

  const recl = (e) => {
    if(e.target.id === 'userName'){
      setOut({...out, name: e.target.value})
    } else if (e.target.id === 'userAge') {
      setOut({...out, age: e.target.value})
    }
    
  }

  return (
    <div>
        <label htmlFor="userName">Имя </label> <input type="text" id="userName" value={out.name} onChange={recl}/>
        <hr/>
        <label htmlFor="userAge">Возраст </label> <input type="number" id="userAge" value={out.age} onChange={recl}/>
        <h3>{`Имя:${out.name} Возрвст: ${out.age}`}</h3>
    </div>
  );
}

export default App;

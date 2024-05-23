import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';

function App() {
  // const [showForm, setShowForm] = useState(false); POR SI PRECISO
  return (
    <>
      <Form />
      {/*  {estudiantes.map((estudiante) => (
        <Card key={estudiante.id} estudiante={estudiante} />
      ))} */}
    </>
  );
}

export default App;

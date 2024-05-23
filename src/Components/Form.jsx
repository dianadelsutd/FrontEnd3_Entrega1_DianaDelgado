import React, { useState } from 'react';
import Card from './Card';
import ErrorMsj from './ErrorMsj';

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: '',
    pelicula: '',
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      cliente.nombre.trim().length > 2 &&
      cliente.nombre.trimStart() === cliente.nombre &&
      cliente.pelicula.trim().length > 5
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }

    console.log('nombre al enviar:', cliente.nombre);
    console.log('peli al enviar:', cliente.pelicula);
  };
  return (
    <>
      <h3>¿Cuál es tu película favorita?</h3>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type='text'
          value={cliente.nombre}
          placeholder='Ingresa tu nombre'
          onChange={(event) =>
            setCliente({ ...cliente, nombre: event.target.value })
          }
        />
        <label>Pelicula</label>
        <input
          type='text'
          placeholder='Ingresa tu película favorita'
          value={cliente.pelicula}
          onChange={(event) =>
            setCliente({ ...cliente, pelicula: event.target.value })
          }
        />
        <button>Enviar</button>
      </form>
      {show && <Card cliente={cliente} />}
      {error && <ErrorMsj />}
    </>
  );
};

export default Form;

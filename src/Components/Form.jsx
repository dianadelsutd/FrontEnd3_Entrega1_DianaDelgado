import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <p>FORMULARIO GENERICO: </p>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type='text' />
        <label>Direccion</label>
        <input type='text' />
        <button>Enviar</button>
        <button>Cancelar</button>
      </form>
    </>
  );
};

export default Form;

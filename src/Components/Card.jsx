import React from 'react';

const Card = ({ cliente }) => {
  return (
    <div>
      {/* <p>Esto es una tarjeta!</p> */}
      <h3>¡Hola {cliente.nombre}!</h3>
      <h3>Sabemos que tu película peferida es {cliente.pelicula}. ¡Gracias!</h3>
    </div>
  );
};

export default Card;

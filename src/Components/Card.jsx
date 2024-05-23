import React from 'react';

const Card = ({ cliente }) => {
  return (
    <div>
      {/* <p>Esto es una tarjeta!</p> */}
      <h3>Nombre: {cliente.nombre}</h3>
      <h3>Pelicula preferida: {cliente.pelicula}</h3>
    </div>
  );
};

export default Card;

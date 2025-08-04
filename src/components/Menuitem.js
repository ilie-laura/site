import React from 'react';
function Menuitem({ image, name, price }) {
  return (
    <div className='menuItem'>
      <img src={image} alt={name} className="menuImage" />
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default Menuitem;

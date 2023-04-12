import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating ,latitude,longitude},
}) => {
  const redirectToMarker = (lat, lng) => {
    // Redirige vers marqueur en ouvrant un nouvel onglet
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, '_blank');
    //window.location.href = `https://maps.google.com/maps?q=${lat},${lng}`;
  };

  return (
    <div className='listItem-wrap'>
      <img src={coverSrc} alt='' />
      <header>
        <h4>{title}</h4>
        <span>🌟{rating}</span>
      </header>
      <footer>
        <p>
          <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
        </p>
        <p>
          <b>${price}</b>
        </p>
        <p>
          <button onClick={() => redirectToMarker(latitude, longitude)}>
            Voir position
          </button>
        </p>
      </footer>
    </div>
  );
};

export default ListItem;

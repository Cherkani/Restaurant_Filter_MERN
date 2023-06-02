import React from 'react';
import './styles.css';

const ListItem = ({
  item: { title, price, serviceTime, rating, latitude, longitude, imagesrc },
}) => {
  const redirectToMarker = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const randomRating = Math.floor(Math.random() * 5) + 1;
  const randomServiceTime = `${Math.floor(Math.random() * 15) + 10} - ${Math.floor(Math.random() * 5) + 30} min`;
  const randomDeliveryFee = Math.floor(Math.random() * 8) + 7;

  return (
    <div className='listItem-wrap'>
      <img src={imagesrc} alt='' />
      <header>
        <h4>{title}</h4>
        <span>🌟{randomRating}</span>
      </header>
      <footer>
        <p>
          <b>{randomServiceTime}</b>
          <span> Delivery Fee {randomDeliveryFee} dh</span>
        </p>
        {price && <p><b>${price}</b></p>}
      </footer>
      <div>
        <button
          style={{ backgroundColor: '#3bb19b', borderColor: '#3bb19b' }}
          className='btn btn-primary d-block mx-auto my-4'
          type='submit'
          onClick={() => redirectToMarker(latitude, longitude)}
        >
          Voir position
        </button>
      </div>
    </div>
  );
};

export default ListItem;

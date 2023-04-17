import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, serviceTime, rating, latitude, longitude },
}) => {

  const redirectToMarker = (lat, lng) => {
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, '_blank');
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
          <b>      { Math.floor(Math.random() * (15)) + 10}       -       { Math.floor(Math.random() * (5)) + 30} min  </b>
         
            <span> Delivery Fee { Math.floor(Math.random() * (8)) + 7} dh</span>
  
        </p>
        {price && (
          <p>
            <b>${price}</b>
          </p>
        )}
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

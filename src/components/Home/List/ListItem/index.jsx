//oNAnkdmf6nmMOCImi14z~vVx1BJ7FiUF0uaa7PBH55w~AtKIR_zdPCtxMIW5xbOR7RyXEgxNvfbuNKx3oCxrSeW3Ecy5twtmIfM-0wOla8FU

import React, { useEffect, useState } from 'react';
import './styles.css';

const ListItem = ({
  item: { title, price, serviceTime, rating, latitude, longitude },
}) => {
  const redirectToMarker = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const [coverSrc, setCoverSrc] = useState(null);

  useEffect(() => {
    const apiKey = 'oNAnkdmf6nmMOCImi14z~vVx1BJ7FiUF0uaa7PBH55w~AtKIR_zdPCtxMIW5xbOR7RyXEgxNvfbuNKx3oCxrSeW3Ecy5twtmIfM-0wOla8FU';
    const imageUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${latitude},${longitude}/15?mapSize=500,500&pp=${latitude},${longitude};66;${title}&key=${apiKey}`;

    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const src = URL.createObjectURL(blob);
        setCoverSrc(src);
      });
  }, [latitude, longitude, title]);

  return (
    <div className='listItem-wrap'>
      {coverSrc && <img src={coverSrc} alt='' />}
      <header>
        <h4>{title}</h4>
        <span>🌟{Math.floor(Math.random() * 5) + 1}</span>
      </header>
      <footer>
        <p>
          <b>{Math.floor(Math.random() * 15) + 10} - {Math.floor(Math.random() * 5) + 30} min</b>
          <span> Delivery Fee {Math.floor(Math.random() * 8) + 7} dh</span>
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





/*
import React, { useEffect, useState } from 'react';
import './styles.css';

const ListItem = ({
  item: { title, price, serviceTime, rating, latitude, longitude },
}) => {
  const redirectToMarker = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const [coverSrc, setCoverSrc] = useState(null);

  useEffect(() => {
    const apiKey = 'AIzaSyBq7lKLXUQM3FoQef8JeOJU5EQItDmONbQ';
    const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=400x400&key=${apiKey}`;
    setCoverSrc(imageUrl);
  }, [latitude, longitude]);

  return (
    <div className='listItem-wrap'>
      {coverSrc && <img src={coverSrc} alt='' />}
      <header>
        <h4>{title}</h4>
        <span>🌟{Math.floor(Math.random() * 5) + 1}</span>
      </header>
      <footer>
        <p>
          <b>{Math.floor(Math.random() * 15) + 10} - {Math.floor(Math.random() * 5) + 30} min</b>
          <span> Delivery Fee {Math.floor(Math.random() * 8) + 7} dh</span>
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
*/


//apiKey: "AIzaSyBq7lKLXUQM3FoQef8JeOJU5EQItDmONbQ",
/*
import React, { useEffect, useState } from 'react';
import './styles.css';
const ListItem = ({
  item: { title, price, serviceTime, rating, latitude, longitude },
}) => {

  const redirectToMarker = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const [coverSrc, setCoverSrc] = useState(null);

  useEffect(() => {
    const apiKey = 'AIzaSyBq7lKLXUQM3FoQef8JeOJU5EQItDmONbQ';
    const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=500x500&markers=color:red%7C${latitude},${longitude}&key=${apiKey}`;

    setCoverSrc(imageUrl);
  }, [latitude, longitude]);

  return (
    <div className='listItem-wrap'>
      {coverSrc && <img src={coverSrc} alt='' />}
      <header>
        <h4>{title}</h4>
        <span>🌟{Math.floor(Math.random() * 5) + 1}</span>
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


//apiKey: "AIzaSyBq7lKLXUQM3FoQef8JeOJU5EQItDmONbQ",
*/ 

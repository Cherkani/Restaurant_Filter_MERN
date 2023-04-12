import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/restaurants')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);
}
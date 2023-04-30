import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DropdownMenu from './DropdownMenu';
import RestaurantList from './RestaurantList';
import SearchBar from '../SearchBar';
import EmptyView from '../../common/EmptyView/index'
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';





const ParentComponent = ({ onZoneSelect }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');

  ///////////////////

  const [selectedCuisine, setSelectedCuisine] = useState(null);
  
  const [cuisineList, setCuisineList] = useState([]);


  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryList, setCategoryList] = useState([]);


//////////////////////:
  const handleCitySelect = async (cityId) => {
    setSelectedCity(cityId);
    setSelectedZone(null);
    try {
      const restaurantsResponse = await axios.get(`http://localhost:3000/api/restaurants/city/${cityId}`);
      setRestaurants(restaurantsResponse.data);
      const zonesResponse = await axios.get(`http://localhost:3000/api/zones/city/${cityId}`);
      setZones(zonesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleZoneSelect = async (zoneId) => {
    setSelectedZone(zoneId);
    try {
      const response = await axios.get(`http://localhost:3000/api/restaurants/zone/${zoneId}`);
      setRestaurants(response.data);
      const selectedZoneObj = response.data.find((zone) => zone._id === zoneId);
      onZoneSelect(selectedCity, selectedZoneObj);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleCuisineFilter = (e) => {
    setCuisineFilter(e.target.value);
  }
  const handleChangeChecked = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const getList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/restaurants");
      setRestaurants(response.data);
      const cuisines = new Set(response.data.map(restaurant => restaurant.cuisine));
      setCuisineList([...cuisines]);
      const category = new Set(response.data.map(restaurant => restaurant.category));
      setCategoryList([...category]);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    getList();
  }, []);


  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.title.toLowerCase().includes(searchInput.toLowerCase())
      && restaurant.cuisine.toLowerCase().includes(cuisineFilter.toLowerCase())
      && (selectedCuisine ? restaurant.cuisine === selectedCuisine : true)
      && (selectedCategory ? restaurant.category === selectedCategory : true);
  });

  return (
    <div className="home">
      <SearchBar
        value={searchInput}
        changeInput={handleSearchInput}
      />
      <div className="home_panelList-wrap">

       
        <div className="home_panel-wrap">
        <div className="cuisine-filter">
  <h4>Category :</h4>
  
  <br/>
  <FilterListToggle
    options={categoryList.map((category) => ({ label: category, id: category, value: category }))}
    value={selectedCategory}
    selectToggle={(event, newCategory) => setSelectedCategory(newCategory)}
  />
</div>
<br/>

        <div className="cuisine-filter">
  <h4>Cuisine :</h4>
  
  <br/>
  {cuisineList.map((cuisine) => (
    <div>
  <CheckboxProton
    changeChecked={() => {
      if (selectedCuisine === cuisine) {
        setSelectedCuisine(null);
      } else {
        setSelectedCuisine(cuisine);
      }
    }}
    cuisine={cuisine}
    selectedCuisine={selectedCuisine}
  />
  <br/></div>
  ))}
</div>
<br/>
        <h4>Filtrer Ville:</h4>
        <br/>
        <DropdownMenu onCitySelect={handleCitySelect} />
  {selectedCity && (
    <div class="row">
      {zones.map((zone) => (
        <div class="col-md-6 mb-3">
          <br />
          <button
            key={zone._id}
            className={`btn btn-primary ${selectedZone === zone._id ? 'active' : ''}`}
            onClick={() => handleZoneSelect(zone._id)}
            style={{
              width: "100px",
              height: "50px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }}
          >
            <span class="text-truncate">{zone.name}</span>
          </button>
        </div>
      ))}
    </div>
  )}
  

  <br/>
  <button
    style={{ backgroundColor: '#3bb19b', borderColor: '#3bb19b' }}
    className="btn btn-primary"
    onClick={handleReload}
  >
    Recharger
  </button>
  <div className="cuisine-filter">
    <h4>Filtrer par cuisine:</h4>
    {cuisineList.map((cuisine) => (
      <div key={cuisine}>
        
        <input type="checkbox" id={cuisine} value={cuisine} checked={selectedCuisine === cuisine} onChange={() => {
  if (selectedCuisine === cuisine) {
    setSelectedCuisine(null);
  } else {
    setSelectedCuisine(cuisine);
  }
}} />
<label htmlFor={cuisine}>{cuisine}</label>
      </div>
    ))}
  </div>

  


  {/*   check type  
  <div className="cuisine-filter">
    <h4>Filtrer par Type:</h4>
    {categoryList.map((category) => (
      <div key={category}>
        <input type="checkbox" id={category} value={category} checked={selectedCategory === category} onChange={() => setSelectedCategory(category)} />
        <label htmlFor={category}>{category}</label>
      </div>
    ))}
  </div> */}
  


    </div>

    <div className="home_list-wrap">
      {filteredRestaurants.length > 0 ? (
        <RestaurantList restaurants={filteredRestaurants} />
      ) : (
        <EmptyView />
      )}
    </div>
  </div>
</div>
  );
};

export default ParentComponent;
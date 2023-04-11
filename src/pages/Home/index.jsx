import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import { dataList } from '../../constants';
import './styles.css';
 

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

//////////aymen filter combo bpx : city
const [cities, setCities] = useState([
  { id: 1,  checked: false ,label: 'VILLE a' },
  { id: 2,  checked: false ,label: 'VILLE b' },
  { id: 3,  checked: false ,label: 'VILLE c' },
  { id: 4,  checked: false ,label: 'VILLE d' },

    ]);

    /////////////////////////////////////stock la selection pour traiter
    const [foodState, setFoodState] = useState("");

    
    const [zone, setZone] = useState([
      { id: 1,  checked: false ,label: "aa" ,id2:1 ,},
      { id: 2,  checked: false ,label: "ab"  ,id2:1 ,},
      { id: 3,  checked: false ,label: "ac"  ,id2:1 ,},
      
      { id: 4,  checked: false ,label: "ba" ,id2:2 ,},
      { id: 5,  checked: false ,label: "bb" ,id2:2 ,},
      { id: 6,  checked: false ,label: "bc",id2:2 ,},
     
      { id: 7,  checked: false ,label: "ca" ,id2:3 ,},
      { id: 8,  checked: false ,label: "cb",id2:3 ,},
      { id: 9,  checked: false ,label: "cc" ,id2:3 ,},
      
      
      { id: 10,  checked: false ,label: "da" ,id2:4 ,},
      { id: 11,  checked: false ,label: "db" ,id2:4 ,},
      { id: 12,  checked: false ,label: "dc" ,id2:4 ,},
      { id: 13,  checked: false ,label: "dc" ,id2:4 ,},
      
      
    
        ]);

    
///////////////////////////////////////////////

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
    { id: 4, checked: false, label: 'ff' },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');


  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);
/////////////////->
////////////aymen->

  
const handleChangeChecked2 = (id) => {
  const citiesStateList = zone; // Create a new copy of the state array
  const changeCheckedCities = citiesStateList.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  setZone(changeCheckedCities);
};


////////////////------------
  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
///////////////////////////////////->
///////////aymen
const citiesChecked = zone
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (citiesChecked.length) {
      updatedList = updatedList.filter((item) =>
      citiesChecked.includes(item.zone)
      );
    }

//////////////


    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice,cities,zone]);

  return (
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            ////
            cities={cities}
            zone={zone}
            changeChecked2={handleChangeChecked2}
            /////
            changePrice={handleChangePrice}
            setFoodState={setFoodState}
            foodState={foodState}
            
          />
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
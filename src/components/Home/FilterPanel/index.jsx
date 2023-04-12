import React, { useState } from 'react';
import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from '../../common/CheckboxProton/index';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import './styles.css';
import CheckboxProton2 from '../../common/CheckboxProton/index2';


//import { updateAllElementsToFalse } from './zoneUtils.js';

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
  cities,
  zone,
  changeChecked2,
  setZone,
  updateAllElementsToFalse,
  foodState,
  setFoodState,
}) => {
  const [comboValue, setComboValue] = useState('null');
  
//////////////////////////:aymen
const handleComboChange = (e) => {
  
  const selectedFood = e.target.value;
  console.log(selectedFood);//////////////pour tester
  if (selectedFood === 'null') {
    // Reset the foodState to an empty string
    setFoodState('');
  } else {
    setComboValue(selectedFood);
    setFoodState(
      <div>
        {/* eviter affichage redondant*/}
        <div className='input-group'>
        <table>
          <br/>
  <p className='label'>Zone:</p>
  {Array.from(new Set(zone.filter(zoneItem => parseInt(selectedFood) === zoneItem.id2).map(zoneItem => zoneItem.label))).map(uniqueLabel => {
    const zoneItem = zone.find(item => item.label === uniqueLabel);
    return (
      <tr>
      <CheckboxProton2
        key={zoneItem.id}
        zone={zoneItem}
        changeChecked2={changeChecked2}
      />
      <br />
      </tr>
    );
  })}
  </table>
</div>


      </div>
    );
  }
};

  const handleReload = () => {
    if (comboValue !== 'null') {
      // Reload the page only if comboValue is not 'null'
      window.location.reload();
    }
  };
/////////////////////////////////////////////////
  return (
    <div>
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      
      <div className='input-group '>
        <table>

        
        <p className='label'>Cuisine</p>
        {cuisines.map((cuisine) => (
          
            <tr>
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          /><br />
          </tr>
           
        ))}
       </table>
      </div>
      <div className='input-group'>
        <p className='label-range'>Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className='input-group'>
        <p className='label'>Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>



{/* aymen */}

   
 
      <div className='flex-align'>
      <p className='label'>Ville</p>
        <select 
        
          className="form-control"
          value={comboValue}
          onChange={handleComboChange}
          onClick={updateAllElementsToFalse}
        >
          <option value='null' className="dropdown-item">-- Aucune ville --</option>
          
          {cities.map((cities) => (
            <option  className="dropdown-item" value={cities.id} key={cities.id}>
              {cities.label}
            </option>
          ))}
        </select>
        
        {foodState}
        <button style={{ backgroundColor: '#3bb19b', borderColor: '#3bb19b' }}
          className='btn btn-primary ' onClick={handleReload}>
          Recharger
        </button>
      </div>
    </div>
  );
};
{/* aymen */}
export default FilterPanel;
import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { id, name, species, about, location, selectPetCallback } = props;

  const onSelectButtonClick = () => {
    console.log(props.id);
    console.log(typeof selectPetCallback);
    selectPetCallback(props);
  }

  return (
    <div className="card pet-card">

      <section className="pet-card--header">

      { speciesEmoji(species) } {id} - {name} 
        <button onClick={ onSelectButtonClick }
          className="btn btn-primary pet-card--select-pet-btn"
          >
            Select
        </button>
        <button 
          type="button" 
          className="btn btn-danger pet-card--close-btn" 
          aria-label="Close"
        >
          Close
        </button>
      </section>
      <section className="pet-card--body">
        { about.length > 128 ? `${about.substring(0, 128)}...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        {location}
      </section>
    </div>
  );
};
    
PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired, 
  species: PropTypes.string.isRequired, 
  about: PropTypes.string, 
  location: PropTypes.string,
  selectPetCallback: PropTypes.func.isRequired
}
    
export default PetCard;
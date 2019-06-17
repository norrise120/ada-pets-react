import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const petCardComponents = props.pets.map((pet) => {
    const { id, name, species, about, location } = pet;
    return (<li key={id}><PetCard
      key={id}
      name={name}
      species={species}
      about={about}
      location={location}
    />
    </li>);
  });

  return (
    <div className="card-group">
      {petCardComponents}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;

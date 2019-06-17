import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  selectPet = (pet) => {
    console.log(pet);
    this.setState({currentPet: pet});
  }

  deselectPet = () => {
    this.setState({currentPet: undefined});
  }

  render() {
    const { currentPet } = this.state;

    let petDetailsDisplay = ""
    if (this.state.currentPet) {
      petDetailsDisplay = <PetDetails currentPet={this.state.currentPet} />
    }

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          {petDetailsDisplay}
        <section className="pet-list-wrapper">
          <PetList pets={pets} selectPetCallback={this.selectPet} deselectPetCallback={this.deselectPet}/>
        </section>
        <section className="new-pet-form-wrapper">
           <NewPetForm />
        </section>
      </main>
    );
  }
}

export default App;

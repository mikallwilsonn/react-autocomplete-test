// --
// Dependencies
import React, { useState } from 'react';
import './App.css';


// --
// Components
import AutocompleteText from './components/AutocompleteText';
import CountryInfo from './components/CountryInfo';


function App() {
  const [ isCountrySelected, setIsCountrySelected ] = useState( false );
  const [ selectedCountry, setSelectedCountry ] = useState( null );

  const renderCountryInfo = () => {
    if ( isCountrySelected ) {
      return <CountryInfo country={ selectedCountry } />
    }
  }

  return (
    <div className="App">
      <h1>
        Search Countries
      </h1>

      <AutocompleteText 
        setSelection={( value ) => setIsCountrySelected( value )}
        selection={( value ) => setSelectedCountry( value )}
        isCountrySelected={ isCountrySelected }
      />

      { renderCountryInfo() }
    </div>
  );
}

export default App;

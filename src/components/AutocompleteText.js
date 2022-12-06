// --
import React, { useState } from 'react';
import '../AutocompleteText.css';
import worldCountries from 'world-countries';


const AutocompleteText = ({ setSelection, selection, isCountrySelected }) => {
    const [ suggestions, setSuggestions ] = useState([]);
    const [ inputValue, setInputValue ] = useState( '' );

    const onTextChanged = ( value ) => {
        if ( isCountrySelected ) {
            setSelection( false );
            selection( null );
        }

        if ( value.length > 0  ) {
            const regex = new RegExp( `^${ value }`, 'i' );
            setSuggestions( worldCountries.sort().filter( country => regex.test( country.name.common )));
        } else {
            setSuggestions([]);
        }

        setInputValue( value );
    }


    const selectSuggestion = ( value ) => {
        setInputValue( value.name.common );
        setSuggestions([]);
        setSelection( true );
        selection( value );
    }

    const renderSuggestions = () => {
        if ( suggestions.length === 0 )  {
            return null;
        }

        return suggestions.map(( country ) => { 
            return ( 
                <li 
                    key={ country.name.official }
                    onClick={() => selectSuggestion( country ) }
                >
                    { country.name.common }
                </li> 
            );
        });

    }

    return (
        <div className="AutocompleteText">
            <input 
                type="text" 
                value={ inputValue }
                onChange={( event ) => { 
                    onTextChanged( event.target.value); 
                }}
            />

            <ul className="SuggestionsList">
                { renderSuggestions() }
            </ul>
        </div>
    );
}

export default AutocompleteText;
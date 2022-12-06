// --
import React from 'react';
import '../CountryInfo.css';



const CountryInfo = ({ country }) => {
    const renderFromObj = ( obj ) => {
        let str = '';

        for ( const key in obj ) {
            str = str + ` ${ obj[key] }`
        }

        return str;
    }

    return (
        <div className="CountryInfo">
            <h3>
                { country.name.official }
            </h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            Region
                        </td>

                        <td>
                            { country.region}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Subregion
                        </td>

                        <td>
                            { country.subregion}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Flag
                        </td>

                        <td>
                            { country.flag }
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Capital
                        </td>

                        <td>
                            { country.capital }
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Currency
                        </td>

                        <td>
                            { country.currencies[ Object.keys(country.currencies)[0]].name } { ` ` }
                            ({ country.currencies[ Object.keys(country.currencies)[0]].symbol })
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Language(s)
                        </td>

                        <td>
                            { renderFromObj( country.languages )}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Latitude | Longitude
                        </td>

                        <td>
                            <a 
                                href={ `https://www.google.com/maps/@${ country.latlng[0] },${ country.latlng[1] },5z` } 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                { country.latlng[0]} { `, ` }
                                { country.latlng[1] }
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryInfo;
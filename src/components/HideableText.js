// --
import React, { useState } from 'react';

const HideableText = ({ text }) => {

    const [ isHidden, setIsHidden ] = useState( false );

    return (
        <div>
            <button onClick={() => setIsHidden( !isHidden ) }>
                Toggle Text
            </button>

            <span>
                { !isHidden && text }
            </span>
        </div>
    );
}

export default HideableText;
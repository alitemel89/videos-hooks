import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')

    const onInputChange = (event) => {
        setTerm(event.target.value);
        
    };

    const onSubmit = (event) => {
        event.preventDefault(); // With this method text in search bar will not disappear after hitting enter.
        onFormSubmit(term)
    }
    
    return (
        <div className="search-bar ui segment" style={{marginTop: 10}}>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )


}




export default SearchBar;
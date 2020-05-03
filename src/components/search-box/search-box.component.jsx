import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({placeholder, searchField}) => (
    <div className='container'>
    <input 
    // className='search'
    type='text'
         placeholder={placeholder}
         onChange={searchField}
         />
         <div className="search"></div>
    </div>        

)

export default SearchBox;






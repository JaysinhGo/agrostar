import React from 'react';
import './../css/SearchFilter.css'

const SearchFilter = (props)=>{
    return(
            <div className="input-field col s12 white hoverable customInput">
                <input onChange={props.handleFilter} type="text" placeholder="Search by product name" />
                <i className="material-icons">search</i>
            </div>
    )
}

export default SearchFilter;
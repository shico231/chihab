import React from 'react';

const Searchbar = ({searchfield , setSearchfield}) => {
  
    const gather_into = (event) => {
        console.log(event.target.value);
        setSearchfield(event.target.value);
    }   

    return (
    <div className='shico'>  
        <h1> SEARCH BAR </h1>
        <input type="text" placeholder="search robots ....." onChange={gather_into} value ={searchfield}></input>
        <hr/>
    </div>
    )
}
 

export default Searchbar ; 
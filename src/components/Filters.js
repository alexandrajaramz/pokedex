import React from 'react';

const Filters = props => {
  const {searchName} = props;
  return (
    <form className="header__form">
      <label htmlFor="form-name">
        <input 
          type="text" 
          name="form-name"
          className="form-name__input" 
          placeholder="Find a Pokémon" 
          onChange={searchName}   
        />
      </label>
    </form>
  );
}

export default Filters;
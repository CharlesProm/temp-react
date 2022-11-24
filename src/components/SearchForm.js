import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchDrink } = useGlobalContext();

  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Cocktail</label>
          <input
            autoFocus
            type='text'
            name='name'
            id='name'
            onChange={(e) => searchDrink(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

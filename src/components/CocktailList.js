import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { load, data } = useGlobalContext();

  if (load) return <Loading />;

  if (data.length === 0) {
    return <h2 className='section-title'>no cocktails match your criteria</h2>;
  }
  console.log(data);

  return (
    <section className='section'>
      <h2 className='section-title'>cocktail</h2>
      <div className='cocktails-center'>
        {data.map((product) => {
          return <Cocktail key={product.idDrink} {...product} />;
        })}
      </div>
    </section>
  );
  return <h3>que tal</h3>;
};

export default CocktailList;

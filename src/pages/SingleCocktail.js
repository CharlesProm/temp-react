import React, { useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchDrink = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      const { drinks } = data;
      setLoading(false);
      setData(...drinks);

      //console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  React.useEffect(() => {
    fetchDrink();
  }, [id]);

  const {
    strDrinkThumb,
    strGlass,
    strAlcoholic,
    strDrink,
    strCategory,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = data;

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  console.log(data);

  if (loading) return <Loading />;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{strDrink}</h2>

      <div className='drink'>
        <img src={strDrinkThumb} alt={strDrink} />
        <div className='drink-info'></div>
        <p>
          <span className='drink-data'>name :</span>
          {strDrink}
        </p>
        <p>
          <span className='drink-data'>category :</span>
          {strCategory}
        </p>
        <p>
          <span className='drink-data'>info :</span>
          {strAlcoholic}
        </p>
        <p>
          <span className='drink-data'>glass :</span>
          {strGlass}
        </p>
        <p>
          <span className='drink-data'>instructions :</span>
          {strInstructions}
        </p>
        <p>
          <span className='drink-data'>ingredients: </span>
          {ingredients.map((ingredient, index) => {
            return <span key={index}>{ingredient}</span>;
          })}
        </p>
      </div>
    </section>
  );
};

export default SingleCocktail;

import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [temp, setTemp] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      setData(data.drinks);
      setTemp(data.drinks);
      setLoad(false);
    } catch (error) {
      console.log(error.response);
    }
  });
  useEffect(() => {
    fetchData();
  }, []);
  const searchDrink = (drink) => {
    const newData = temp.filter((drinks) =>
      drinks.strDrink.toLowerCase().includes(drink.toLowerCase())
    );
    setData(newData);
  };
  return (
    <AppContext.Provider value={{ data, load, searchDrink, temp, setLoad }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrusel>
            {initialState.mylist.map((item) => {
              return <CarruselItem key={item.id} {...item} />;
            })}
          </Carrusel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {initialState.trends.map((item) => {
            return <CarruselItem key={item.id} {...item} />;
          })}
        </Carrusel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carrusel>
          {initialState.originals.map((item) => {
            return <CarruselItem key={item.id} {...item} />;
          })}
        </Carrusel>
      </Categories>
    </>
  );
};

export default Home;

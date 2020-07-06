/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search />

      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrusel>
            {myList.map((item) => {
              return <CarruselItem key={item.id} {...item} isList />;
            })}
          </Carrusel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {trends.map((item) => {
            return <CarruselItem key={item.id} {...item} />;
          })}
        </Carrusel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carrusel>
          {originals.map((item) => {
            return <CarruselItem key={item.id} {...item} />;
          })}
        </Carrusel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default connect(props, distpatch)(Home);
export default connect(mapStateToProps, null)(Home);

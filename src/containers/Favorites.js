import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import stylesLayout from "../styles/layout.module.css";
import FavoriteCategoryItem from "../components/FavoriteCategoryItem";

const Favorites = () => {
  return (
      <>
        <Header title={`Favorites`} subtitle={`Browse your favorite genres`} />
        <section className={stylesLayout.content}>
          <FavoriteCategoryItem name="science fiction" />
        </section>
        <TabBar/>
      </>
  );
};

export default Favorites;
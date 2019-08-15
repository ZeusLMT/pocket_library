import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import stylesLayout from "../styles/layout.module.css";
import FavoriteCategoryItem from "../components/FavoriteCategoryItem";
import useGlobal from "../store";

const Favorites = () => {
  const [globalState, globalActions] = useGlobal();

  const renderCategoryList = (category) => {
    return (
        <FavoriteCategoryItem name={category.name} />
    );
  };

  return (
      <>
        <Header title={`Favorites`} subtitle={`Browse your favorite genres`} />
        <section className={stylesLayout.content}>
          {globalState.favoriteCategories.map(renderCategoryList)}
        </section>
        <TabBar/>
      </>
  );
};

export default Favorites;
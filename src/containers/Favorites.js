import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import stylesLayout from "../styles/layout.module.css";
import styles from "./Favorites.module.css"
import ListItem from "../components/ListItem";
import useGlobal from "../store";

const Favorites = () => {
  const [globalState, globalActions] = useGlobal();

  const renderContent = () => {
    if (globalState.favoriteCategories.length > 0) {
      return (
          <div className={styles.categoryList}>
            {globalState.favoriteCategories.map(renderCategoryList)}
          </div>
      );
    }
    return (
      <p className={styles.emptyCaption}>Let's add your favorite categories here!</p>
    );
  };

  const renderCategoryList = (category) => {
    return (
        <ListItem key={category.id} name={category.name} onClick={() => globalActions.removeFavoriteCategory(category)} />
    );
  };

  return (
      <>
        <Header title={`Favorites`} subtitle={`Browse your favorite genres`} />
        <section className={stylesLayout.content}>
          {renderContent()}
        </section>
        <TabBar/>
      </>
  );
};

export default Favorites;
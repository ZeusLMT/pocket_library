import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import styles from "./Home.module.css";
import stylesLayout from "../styles/layout.module.css";
import useGlobal from "../store";
import BookSection from "../components/BookSection";

const Home = () => {
  const [globalState, globalActions] = useGlobal();
  const renderBookSections = (category) => {
    return (
        <BookSection key={category.id} category={category}/>
    );
  };

  return (
      <>
        <Header title={`Home`} subtitle={`Discover new titles`} />
        <section className={stylesLayout.content}>
          {globalState.categories.map(renderBookSections)}
        </section>
        <TabBar/>
      </>
  );
};

export default Home;
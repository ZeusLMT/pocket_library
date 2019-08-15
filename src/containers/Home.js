import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import styles from "./Home.module.css";
import stylesLayout from "../styles/layout.module.css";

const Home = () => {
  return (
      <>
        <Header title={`Home`} subtitle={`Discover new titles`} />
        <section className={stylesLayout.content}>
          <p>HOME PAGE</p>
        </section>
        <TabBar/>
      </>
  );
};

export default Home;
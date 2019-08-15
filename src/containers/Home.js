import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import styles from "./Home.module.css";
import stylesLayout from "../styles/layout.module.css";

const Home = () => {
  return (
      <>
        <Header title={`POCKET LIBRARY`} subtitle={`abc`} />
        {/*<TabBar/>*/}
      </>
  );
};

export default Home;
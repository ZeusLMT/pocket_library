import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import stylesLayout from "../styles/layout.module.css";

const Profile = () => {
  return (
      <>
        <Header title={`Profile`} subtitle={`View your books status`} />
        <section className={stylesLayout.content}>
          <p>Profile page</p>
        </section>
        <TabBar/>
      </>
  );
};

export default Profile;
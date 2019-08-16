import React from 'react';
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import stylesLayout from "../styles/layout.module.css";
import styles from "./Profile.module.css";
import useGlobal from "../store";
import ListItem from "../components/ListItem";

const Profile = () => {
  const [globalState, globalActions] = useGlobal();

  const renderReadingSection = () => {
    if (globalState.readingList.length <= 0) {
      return (
          <>
            <p className={styles.sectionTitle}>Reading</p>
            <p className={styles.emptyCaption}>Your reading list is empty.</p>
          </>
      );
    }
    return (
        <>
          <p className={styles.sectionTitle}>Reading</p>
          {globalState.readingList.map(renderReadingBookListItem)}
        </>
    );
  };
  const renderSavedSection = () => {
    if (globalState.savedList.length <= 0) {
      return (
          <>
            <p className={styles.sectionTitle}>Saved</p>
            <p className={styles.emptyCaption}>Your saved list is empty.</p>
          </>
      );
    }
    return (
        <>
          <p className={styles.sectionTitle}>Saved</p>
          {globalState.savedList.map(renderSavedBookListItem)}
        </>
    );
  };

  const renderReadingBookListItem= (book) => {
    return (
        <div className={styles.container}>
          <div className={styles.imgHolder}>
            <img src={book.cover} alt="book cover" />
          </div>
          <div className={styles.listItem}>
            <ListItem className={styles.listItem} name={book.title} onClick={() => globalActions.removeReadingBook(book)} />
          </div>

        </div>
    );
  };

  const renderSavedBookListItem= (book) => {
    return (
        <div className={styles.container}>
          <div className={styles.imgHolder}>
            <img src={book.cover} alt="book cover" />
          </div>
          <div className={styles.listItem}>
            <ListItem className={styles.listItem} name={book.title} onClick={() => globalActions.removeSavedBook(book)} />
          </div>

        </div>
    );
  };

  return (
      <>
        <Header title={`Profile`} subtitle={`View your books status`} />
        <section className={stylesLayout.content}>
          <div className={styles.section}>
            {renderReadingSection()}
          </div>
          <div className={styles.section}>
            {renderSavedSection()}
          </div>
        </section>
        <TabBar/>
      </>
  );
};

export default Profile;
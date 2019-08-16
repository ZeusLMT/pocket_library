import React from "react";
import styles from './BookSection.module.css';
import heartLogoFilled from '../resources/icons/favorite_liked.svg';
import heartLogo from '../resources/icons/favorite.svg';
import useGlobal from "../store";
import BookCard from "./BookCard";

const BookSection = ({ category }) => {
  const [globalState, globalActions] = useGlobal();

  const books = globalState.bookList.filter(function (book) {
    return book.category === category.name
  });

  const renderBookCard = (book) => {
    const readingBook = globalState.readingList.find(check => check.id === book.id);
    const savedBook = globalState.savedList.find(check => check.id === book.id);

    if (readingBook || savedBook) {
      return (
          <BookCard book={book} key={book.id} status={true}/>
      );
    }
    return (
        <BookCard book={book} key={book.id} status={false}/>
    );
  };

  const renderHeartLogo = (category) => {
    const likedCategory = globalState.favoriteCategories.find(check => check.name === category.name);
    if (likedCategory) {
      return (
          <img
              src={heartLogoFilled}
              alt="favorite"
              style={{height: '24px', width: '24px'}}
          />
      );
    }
    return (
        <img
            src={heartLogo}
            alt="favorite"
            style={{height: '24px', width: '24px'}}
            onClick={() => globalActions.addFavoriteCategory(category)}
        />
    );
  };

  return (
      <div className={styles.container}>
        <section className={styles.category}>
          <p className={styles.title}>{category.name}</p>
          {renderHeartLogo(category)}
        </section>

        <section className={styles.bookContainer}>
          {books.length > 0 ? books.map(renderBookCard) : <p className={styles.emptyCaption}>Unavailable</p>}
        </section>
      </div>
  );
};

export default BookSection;

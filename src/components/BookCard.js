import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from './BookCard.module.css'
import useGlobal from "../store";

const BookCard = (props) => {
  const { title, author, overview, cover } = props.book;
  const [ globalState, globalActions ] = useGlobal();

  const renderButtons = () => {
    if (props.status) {
      return (
          <p className={styles.inList}>In your list</p>
      );
    }
    return (
        <div className={styles.buttonContainer}>
          <Button
              variant="link"
              className={styles.saveButton}
              onClick={() => globalActions.addToSavedList(props.book)}
          >
            Save
          </Button>
          <Button
              variant="link"
              className={styles.checkoutButton}
              onClick={() => globalActions.addToReadingList(props.book)}
          >
            Read
          </Button>
        </div>
    );
  };

  return (
      <Card style={{ maxHeight: '50rem', width: '17rem', borderRadius: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
        <Card.Img variant="top" src={cover} style={{borderRadius: '1rem' }} />
        <Card.Body>
          <Card.Subtitle className={styles.author}>{author}</Card.Subtitle>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.overview}>
            {overview}
          </Card.Text>
          {renderButtons()}
        </Card.Body>
      </Card>
  );
};

export default BookCard;
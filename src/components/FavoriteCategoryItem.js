import React from "react";
import styles from './FavoriteCategoryItem.module.css'
import deleteIcon from '../resources/icons/x-circle.svg'

const FavoriteCategoryItem = ({ name }) => {
  return (
      <div className={styles.container}>
        <p className={styles.title}>{name}</p>
        <img src={deleteIcon} alt="delete" />
      </div>
  );
};

export default FavoriteCategoryItem;

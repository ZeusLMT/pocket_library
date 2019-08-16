import React from "react";
import styles from './ListItem.module.css'
import deleteIcon from '../resources/icons/x-circle.svg'

const ListItem = ({ name, onClick }) => {
  console.log(name);
  return (
      <div className={styles.container}>
        <p className={styles.title}>{name}</p>
        <img src={deleteIcon} alt="delete" onClick={onClick}/>
      </div>
  );
};

export default ListItem;

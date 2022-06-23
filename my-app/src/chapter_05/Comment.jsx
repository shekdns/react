import React from "react";
import styles from '../css/Comment.module.css';  //이런식으로 css-module을 이용하여 css 사용

function Comment( props ) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className={styles.image}></img>
      </div>
      <div className={styles.contentContainer}>
        <span className={styles.nameText}>{props.name}</span>
        <span className={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
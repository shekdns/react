import React from "react";
import styles from '../css/Notification.module.css';

class Notification extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {};
  }
  //아래의 3개의 console.log 의 함수들은 생명주기 함수  잘 쓰이지는 않는다고 한다 
  componentDidMount() {
    console.log( `${this.props.id} componentDidMount() called.` );
  }

  componentDidUpdate() {
    console.log( `${this.props.id} componentDidUpdate() called.` );
  }

  componentWillUnmount() {
    console.log( `${this.props.id} componentWillUnmount() called.` );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.messageText}>
          {this.props.message}
        </span>
      </div>
    );
  }
}

// function Notification( props ) {
// return (

//  );
// }

export default Notification;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoClick from '../Autoclick';
import styles from './Counter.module.css';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      isAdd: true
    }
  }
  
 
  btnHandler = () => {
    this.setState((state, props)=>{
      return {count: state.isAdd?state.count+props.step:state.count-props.step}
    })
  }
  changeAction = () => {
    this.setState(
       {isAdd: !this.state.isAdd}
    )
  }

  clearCounter = () => {
    this.setState({
      count:0,
      isAdd: true
    })
  }
 

 
  render() {
    return (
     <>
      <div>
        <p>Counter: {this.state.count}</p>
        <button className={styles.btn} onClick={this.btnHandler}>{this.state.isAdd?'ADD':'SUB'}</button>
        <button className={styles.btn} onClick={this.changeAction}>Change</button>
        <button className={styles.btn} onClick={this.clearCounter}>Clear</button>
      </div>
     <AutoClick btnHandler={this.btnHandler} />
     </>
    );
  }
}

Counter.propTypes = {
  step:  PropTypes.number.isRequired
}

export default Counter;

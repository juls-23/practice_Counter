import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AutoClick.module.css';

class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId:1000,
      isAutoClick: false, 
    }
    this.duration = 35000;
    this.timer = null
  }

  handleInput = ({target:{value}}) => this.setState({intervalId: Number(value)})
  

  tick = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(()=>{
      this.props.btnHandler()
    }, this.state.intervalId)
  }


  stop = () => {
    clearTimeout(this.timer); 
    this.setState({isAutoClick: false})
    this.timer = null;
  }

  handlerAutoClick = () => {
    this.setState({isAutoClick: true}) 
    setTimeout(()=>{
       this.stop();
     }, this.duration) 
  }

  componentDidMount(){
    this.handlerAutoClick()
  }

  componentDidUpdate(){  
     if(this.state.isAutoClick) {
       this.tick()}
  } 

  componentWillUnmount(){
   this.stop()
  }

 
  render() {
    return (
      <div>
      <button 
        className={styles.btn}
        onClick={this.state.isAutoClick?this.stop:this.handlerAutoClick} >AutoClick: {this.state.isAutoClick?'Stop':'Start'}
      </button>
      <p> Interval: {this.state.intervalId/1000} sec </p>
      <input 
        type='number' 
        // value={this.state.intervalId} 
        placeholder='change Interval'
        onChange={this.handleInput} />
        <span>ms</span>
      <p>AutoClick Duration: {this.duration/1000} sec</p>
      </div>
    );
  }
}    

AutoClick.propTypes = {
  btnHandler:  PropTypes.func.isRequired
}

 
export default AutoClick;

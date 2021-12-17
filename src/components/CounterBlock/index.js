import React, { Component } from 'react';
import Counter from './Counter';
import Step from './Step';
import styles from './CounterBlock.module.css';


class CounterBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }

  updateStep = (newStep) => {
    this.setState({ step: Number(newStep) });
  };

  render() {
    const {step} = this.state
    return (
      <section className={styles.container} >
        <Counter step={Number(step)}/> 
        <Step step={step} setStep={this.updateStep}/>
      </section>
    );
  }
}

export default CounterBlock;

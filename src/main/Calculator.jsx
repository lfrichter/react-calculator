import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState }

  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = (operation) => {
    if (this.state.current === 0) {
      console.log('this.state', this.state)
      this.setState({
        operation, current: 1,
        clearDisplay: true
      })
    } else {
      const equals = operation === '='
      const currentOperation = this.state.operation

      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }
      if (isNaN(values[0]) || !isFinite(values[0])) {
        this.clearMemory()
        return
      }
      values[1] = 0;
      console.log('values', values)

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  displayValueAlreadyHasDot = (digit) => {
    return digit === '.' && this.state.displayValue.includes('.')
  }

  displayValueCannotBeStartedWithZero = () => {
    return this.state.displayValue === '0'
  }

  addDigit = (digit) => {
    if (this.displayValueAlreadyHasDot(digit)) {
      return
    }

    const clearDisplay = this.displayValueCannotBeStartedWithZero() || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + digit
    this.setState({ displayValue, clearDisplay: false })

    if (digit !== '.') {
      const index = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[index] = newValue
      this.setState({ values })
      console.log(values);
    }
  }

  render() {
    const addDigit = (n) => this.addDigit(n)
    const setOperation = (op) => this.setOperation(op)

    return (
      <div className="Calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple/>
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}

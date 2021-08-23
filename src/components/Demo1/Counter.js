import React, { Component, useState } from 'react';

/**
 * Counter Demo using React Hook
 */
function HookCounter() {
  const [count, setCount] = useState({
    count: 0
  });
  
  
  function Increment() {
    setCount(previousCount => ({
      ...previousCount,
      count: previousCount.count + 1
    }));
  }
  
  function Decrement() {
    setCount(previousCount => ({
      ...previousCount,
      count: previousCount.count - 1
    }));
  }

  return (
    <div>
      <h2>Demo1: Counter (using hooks) </h2>
        <div>
        <button onClick={Decrement}>-</button>
        <span style={{color: 'red'}}> {count.count} </span>
        <button onClick={Increment}>+</button>
      </div>
    </div>
  )
}

class ClassCounter extends Component {
  state = {
    count: 0
  }

  Increment(){
    this.setState(previousCount => ({
      count: previousCount.count + 1
    }))
  }

  Decrement(){
    this.setState(previousCount => ({
      count: previousCount.count - 1
    }))
  }
  
  render() {
    return (
      <div>
       <h2>Demo1: Counter (using class)</h2>
         <div>
         <button onClick={this.Decrement.bind(this)}>-</button>
         <span style={{color: 'red'}}> {this.state.count} </span>
         <button onClick={this.Increment.bind(this)}>+</button>
       </div>
     </div>
    )
  }
}

export { HookCounter, ClassCounter };

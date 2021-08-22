import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ACTIONS } from './index'
// const initialState = {
//   count: 0
// }

class Counter extends Component {
  // state = {
  //   count: 0
  // }

  Increment = () => {
    // this.setState(previousCount => ({
    //   count: previousCount.count + 1
    // }))

    this.props.dispatch({
      type: ACTIONS.INCREMENT
    })
  }

  Decrement = () => {
    // this.setState(previousCount => ({
    //   count: previousCount.count - 1
    // }))
    this.props.dispatch({
      type: ACTIONS.DECREMENT
    })
  }
  
  render() {
    return (
      <div>
       <h2>Demo2: Redux Counter</h2>
         <div>
         <button onClick={this.Decrement}>-</button>
         <span style={{color: 'red'}}> {this.props.count} </span>
         <button onClick={this.Increment}>+</button>
       </div>
     </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);


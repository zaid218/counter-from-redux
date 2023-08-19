// import { useSelector,useDispatch } from 'react-redux';
// import classes from './Counter.module.css';

// const Counter = () => {
//   const toggleCounterHandler = () => {};
//   const counter = useSelector(stat => stat.counter)
//   const dispatch = useDispatch()
  
//   const incrementHandler = () => {
//     dispatch({type:'increment'})
//   }
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>increment</button>
//         <button onClick={decrementHandler}>decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;


import { Component, connect } from 'react';
import classes from "./Counter.module.css";
class Counter extends Component{

  incrementHandler() { 
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
   }

  render() {
    return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.countr}</div>
      <div>
        <button onClick={this.incrementHandler.bind(this)}>increment</button>
        <button onClick={this.decrementHandler.bind(this)}>decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
  }
}

const mapStateToProps = state => {
  return {
    countr:state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement:()=>dispatch({type:'decrement'})
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Counter)

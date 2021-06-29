import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";

import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   return (
//     <Counter
//       number={number}
//       onIncrease={useCallback(() => dispatch(increase()), [dispatch])}
//       onDecrease={useCallback(() => dispatch(decrease()), [dispatch])}
//     />
//   );
// };

// export default React.memo(CounterContainer);

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);

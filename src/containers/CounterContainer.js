import React from "react";
import { connect } from "react-redux";
import {
  asyncDispatchIncrease,
  asyncDispatchDecrease,
} from "../modules/counter";
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

const CounterContainer = ({
  number,
  asyncDispatchIncrease,
  asyncDispatchDecrease,
}) => {
  return (
    <Counter
      number={number}
      onIncrease={asyncDispatchIncrease}
      onDecrease={asyncDispatchDecrease}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    asyncDispatchIncrease,
    asyncDispatchDecrease,
  }
)(CounterContainer);

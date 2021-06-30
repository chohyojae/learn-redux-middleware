import { createAction, handleActions } from "redux-actions";

//CONSTANTS
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//ACTIONS
const increase = createAction(INCREASE);
const decrease = createAction(DECREASE);

//Asynchronously dispatched by redux-thunk middleware
export const asyncDispatchIncrease = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const asyncDispatchDecrease = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

//REDUCER
const initialState = 0;
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;

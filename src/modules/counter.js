import { createAction, handleActions } from "redux-actions";

//CONSTANTS
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//ACTIONS
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

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

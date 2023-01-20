import { MESSAGE_SET } from "../types";
import { messageInitialState } from "./hello-initial-state";

export const messageReducer = (state = messageInitialState, action) => {
  if (action.type === MESSAGE_SET) {
    return { ...state, message: action.payload };
  }
  return state;
};

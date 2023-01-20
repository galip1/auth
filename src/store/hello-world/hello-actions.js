import { Action } from "@remix-run/router";

import { MESSAGE_SET } from "../types";

export const messageSet = (message) => ({
  type: MESSAGE_SET,
  payload: message,
});

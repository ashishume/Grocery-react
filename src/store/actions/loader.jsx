import * as ActionType from "./actionTypes";


export const loading = (bool) => {
  return bool
    ? {
        type: ActionType.SHOW_LOADER,
        payload: bool,
      }
    : {
        type: ActionType.HIDE_LOADER,
        payload: bool,
      };
};

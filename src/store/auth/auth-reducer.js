import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../types";
import { authInitialState } from "./auth-initial-state";

///state ye default degerı yazılır
export const authReducer = (state = authInitialState, action) => {
  if (action.type === LOGIN_SUCCESS) {
    ///logın success olma durumu: backenden user datası gelmesıdır
    //o ara bız dispatch ile burayı tetıkleyecegız --authreducer ı tetıkleyecegız.
    return { ...state, isUserLogin: true, user: action.payload };
    //burada return ile mevcut state yı manipule etmelıyız
    //basrılı ıse false den truye doner, ayrıca user objesını doldurucaz
    //bunun sonucunda state degısmıs olcak
  } else if (action.type === LOGIN_FAIL) {
    return { ...state, isUserLogin: false, user: {} };
    //user da bos olmalı
  } else if (action.type === LOGOUT) {
    return { ...state, isUserLogin: false, user: {} };
  }

  //en son da her duruma karsı state yazılmalı
  return state;
};

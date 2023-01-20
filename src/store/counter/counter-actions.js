import { Action } from "@remix-run/router";
import { COUNTER_UP, COUNTER_DOWN, COUNTER_SET } from "../types";

export const counterUp = () => ({ type: COUNTER_UP });

export const counterDown = () => ({ type: COUNTER_DOWN });

export const counterSet = (value) => ({ type: COUNTER_SET, payload: value });

////counterUp vs actioncreater oluyor

///type:reducer da hangi bölümn çalıştırılıcağını blirler
//payload: state e yerleştirilecek veri

//mesela removeallnote yanı butun verı sılınacakse payloada:id ye gerek yok.
//mesela sign out olacak aynı durum payload a gerek yok
//fakat her zamna type kullnılır

/// ornek::: else if(action.type===REMOVE_NOTE){
//     return{
//         ...state,notes:state.notes.filter((note)=>{
//             return note.id !==Action.payload
//         })
//     }
// }return state

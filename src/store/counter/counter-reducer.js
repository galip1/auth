import { COUNTER_DOWN, COUNTER_SET, COUNTER_UP } from "../types";
import { counterInitialState } from "./counter-initial-state";

//reducer::dispatch yoluyla gönderilen action lara göre ilgili bölümü çalıştırarak merkezi state güncellenir

//state ve action ı alır.her type için ayrı bir if veya switch kullanılır
export const counterReducer = (state = counterInitialState, action) => {
  if (action.type === COUNTER_UP) {
    ///mevcut state spread ile açılır ve değiştirmek istediğimiz kısmı yazarız.return u gördugu zaman state i değiştirir
    const newState = { ...state, counter: state.counter + 1 };

    ///olusturulan yenı state return edıldıgınde mevcut state guncellenmıs olur
    return newState;
  } else if (action.type === COUNTER_DOWN) {
    const newState = { ...state, counter: state.counter - 1 };
    return newState;
  } else if (action.type === COUNTER_SET) {
    const newState = { ...state, counter: action.payload };
    return newState;
  }
  // Bu satır hiç bir if case ine girmediğinde geriye mevcut state i göndersin diye yazıldı
  // Eğer olmazsa tüm state uçar.
  return state;
};

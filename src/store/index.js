import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { counterReducer } from "./counter/counter-reducer";
import { counterInitialState } from "./counter/counter-initial-state";
import { messageReducer } from "./hello-world/hello-reducer";
import { messageInitialState } from "./hello-world/hello-initial-state";

//bos bır merkezı state olusturuldu
const StoreContext = createContext();

//comp lerde merkezı state e erişimi kolaylaştırmak için kendı hook umuzu yazdık
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  ///burada value e koyacagımız degerlerı yazmamız gerekır
  //usereducer hook una reducer ve ınıtılastate parametre olarak verılır.
  //usereducer fonk ıse gerıye setter ve getter ları doner
  //ilki     getter ıkıncısı setter
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    counterInitialState
  );
  const [messageState, dispatchMessage] = useReducer(
    messageReducer,
    messageInitialState
  );

  return (
    <StoreContext.Provider
      value={{
        counterState,
        dispatchCounter,
        messageState,
        dispatchMessage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

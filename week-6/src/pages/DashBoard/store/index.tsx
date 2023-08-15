import { useContext, useReducer } from "react";
import { StoreContext } from "./context";
import { productReducer, initState } from "./reducer";

export const StoreProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(productReducer, initState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const [state, dispatch] = useContext(StoreContext);
  return [state, dispatch];
};

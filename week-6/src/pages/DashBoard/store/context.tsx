import { createContext, useContext, useReducer } from "react";
import { productReducer, initState } from "./reducer";

type Store = [state?: any, dispatch?: any];

export const StoreContext = createContext<Store>([]);

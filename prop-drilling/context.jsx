import { createContext } from "react";

export const CounterContext = createContext({
    count: 0, 
    setCount: () => {}
})
;

//creating context here for the teleporitng
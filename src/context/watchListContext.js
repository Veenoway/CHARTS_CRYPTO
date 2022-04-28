import React, {createContext, useState} from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
    const [ watchList, setWatchList ] = useState(["bitcoin", "ethereum", "cardano", "solana", "vechain","staysafu"]);
    return (
        <WatchListContext.Provider value={{watchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}
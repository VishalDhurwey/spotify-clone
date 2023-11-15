import React, { createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({initaialState, reducer, children}) => (

    <DataLayerContext.Provider value={useReducer(reducer, initaialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = ()=> useContext(DataLayerContext);

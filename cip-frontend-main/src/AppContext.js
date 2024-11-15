// import React from "react";
import React, { createContext, useReducer } from 'react';

const initialState = {
    name: "",
    role: "",
    id: ""
}
const AppContext = React.createContext(initialState);

export default AppContext;
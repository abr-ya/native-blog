import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // actions === { addPost: (dispatch) => return () => {}}
    const boundActions = {};
    Object.keys(actions).forEach(key => {
      boundActions[key] = actions[key](dispatch);
    });

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider }
};

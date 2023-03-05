import { createContext } from "react";


// create state

const initialState = {
    count: 0,
    text:""
  };
  
  // create Action Name
  const enum REDUCER_ACTIONTYPE {
    INCREMENT,
    DECREMENT,
    TEXT_INPUT,
  }
  
  // Mention type of Action
  type ReducerAction = {
    type: REDUCER_ACTIONTYPE;
    Textname?:string
  };
  
  
  // reducer wrote function
  const reducer = (
    state: typeof initialState,
    action: ReducerAction
  ): typeof initialState => {
    switch (action.type) {
      case REDUCER_ACTIONTYPE.INCREMENT:
        return { ...state, count: state.count + 1 };
      case REDUCER_ACTIONTYPE.DECREMENT:
        return { ...state, count: state.count - 1 };
  
        case REDUCER_ACTIONTYPE.TEXT_INPUT:
          return { ...state, text: action.Textname ?? "" };
    
      default:
        throw new Error()
    }
  };
import React, { ChangeEvent, ReactNode, useReducer } from "react";


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

type ChildrenProps = {
    children: (num: number) => ReactNode;
  };

const CounterReducer = ({ children }: ChildrenProps) => {
//   const [count, setCount] = useState<number>(0);
const [state,dispatch] = useReducer(reducer,initialState);

const increment = () => dispatch({type:REDUCER_ACTIONTYPE.INCREMENT});
const decrement = () =>  dispatch({type:REDUCER_ACTIONTYPE.DECREMENT});

const handleTextInput = (e:ChangeEvent<HTMLInputElement>) => { 
    dispatch({
        type:REDUCER_ACTIONTYPE.TEXT_INPUT,
        Textname: e.target.value  
    })
}
  return (
    <div>
      <div>
        <h1>{children(state.count)}</h1>
        <button onClick={increment}>add</button>
        <button onClick={decrement}>sub</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </div>
  );
};

export default CounterReducer;

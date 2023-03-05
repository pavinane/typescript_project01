import React, { ReactNode } from "react";


interface Counting{
    setCounter:React.Dispatch<React.SetStateAction<number>>,
    children:ReactNode
}


function Counter({setCounter,children}:Counting) {
   

  return (
    <div>
      <button onClick={() =>setCounter(prev => prev +1) }>add</button>
      <p>{children}</p>
      <button onClick={() => setCounter(prev => prev -1)}>sub</button>
    </div>
  );
}

export default Counter
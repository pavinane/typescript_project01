import React, { useState } from 'react';
import Counter from './Components/Counter'
import CounterReducer from './Components/Counter/Counter';
import Heading from './Components/Heading'
import Section from './Components/Section'

function App() {

  const[counter,setCounter] = useState<number>(0)
  return (
    <div className="App">
      <Heading title='Welcome to Typescipt'/>
      <Section>this is sub content</Section>
      <Counter setCounter={setCounter}> counting is  {counter}</Counter>
      <CounterReducer>{(num:number) =><>Count Reducer:{num}</>}</CounterReducer>
    </div>
  )
}

export default App

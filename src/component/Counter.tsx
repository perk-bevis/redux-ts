import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../CounterSlice';

type Props = {};

const Counter = (props: Props) => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleAddAmount = () => {
    dispatch(incrementByAmount(amount))
  }

  return <div>
    <p>count: {count}</p>
    <button onClick={handleIncrement}>increment</button>
    <button onClick={handleDecrement}>decrement</button>
    <div>
      <input type="text" onChange={(e) => setAmount(Number(e.target.value))}/>
      <button onClick={handleAddAmount}>add amount</button>
    </div>
  </div>;
};

export default Counter

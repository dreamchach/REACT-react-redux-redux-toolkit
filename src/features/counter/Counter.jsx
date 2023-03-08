import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchIncrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        -1
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}>
        +5
      </button>
      <button
        onClick={() => {
          dispatch(fetchIncrement({ count }));
        }}>
        Fetch Increment
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;

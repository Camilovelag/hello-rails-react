import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/greetings/greetingsSlice";

const Greeting = () => {
  let greetingMessage = useSelector((state) => state.greetings.message);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>My awesome random greetings board</h3><br/>
      <strong>{ greetingMessage }</strong><br/><br/><br/>
      <button type="button" onClick={() => dispatch(getGreetings())}>
        Random message
      </button>
    </div>
  );
}

export default Greeting;
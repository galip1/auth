import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useStore } from "../store";
import { counterDown, counterUp } from "../store/counter/counter-actions";

const HomePage = () => {
  const { counterState, dispatchCounter, messageState, dispatchMessage } =
    useStore();
  const { counter } = counterState;
  const { message } = messageState;
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="warning"
          onClick={() => dispatchCounter(counterDown())}
        >
          -
        </Button>
        <Button variant="secondary" disabled>
          {counter}
        </Button>
        <Button variant="info" onClick={() => dispatchCounter(counterUp())}>
          +
        </Button>
      </ButtonGroup>
      <div>
        <Button variant="warning" onClick={() => dispatchMessage(message())}>
          Show
        </Button>
        <h1>{message} </h1>
      </div>
    </div>
  );
};
export default HomePage;

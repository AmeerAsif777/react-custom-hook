import { useState } from "react";

const usePreviousCurrentState = (value = "") => {
  const [currentstate, setCurrentState] = useState(["", value]);

  const updateState = (value) => {
    setCurrentState((props) => {
      return [props[1], value];
    });
  };

  return [currentstate[0], currentstate[1], updateState];
};

export default usePreviousCurrentState;

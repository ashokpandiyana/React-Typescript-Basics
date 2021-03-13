import StatePracticeState from "./interface";
import { useState } from "react";
const StatePractice = () => {
  const [value, setValue] = useState<StatePracticeState>({});
  return (
    <>
      {typeof value.name === "string" && (
        <h1>
          {value.name} - {value.age}
        </h1>
      )}
      <button
        onClick={() => {
          setValue({ name: "Hello", age: 23 });
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default StatePractice;

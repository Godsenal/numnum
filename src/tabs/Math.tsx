import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../hooks";

const Math: React.SFC = observer(() => {
  const store = useStore();
  const { text } = store.math;
  return (
    <div>
      <input
        className="input"
        value={store.math.query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          store.math.setQuery(e.target.value)
        }
      />
      <button onClick={store.math.fetchFact}>Fetch!</button>
      <p>{text}</p>
    </div>
  );
});

export default Math;

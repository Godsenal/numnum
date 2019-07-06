import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { getRandomFact } from '../api';
import { useStore } from "../hooks";
import { FACT_TYPES } from "../constants";

const fetchRandomFact = async () => {
  const randomType = FACT_TYPES[Math.floor(Math.random() * FACT_TYPES.length)];
  try {
    const res = await getRandomFact(randomType);
    return res;
  }
  catch (err) {
    return null;
  }
}
const Result: React.SFC = observer(() => {
  const store = useStore();
  const [loading, setLoading] = useState(false);
  const { type, query, text } = store.root;
  const setRandomFact = async () => {
    setLoading(true);
    const res = await fetchRandomFact();
    setLoading(false);
    if (res) {
      const { type, text, number } = res;
      store.root.setResult(type, String(number), text);
    }
  }
  useEffect(() => {
    setRandomFact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!text) return null;

  return (
    <div className="content box" style={{ textAlign: 'center' }}>
      <h5 className="subtitle is-5">
        {`${type.toUpperCase()} fact of `}
        <span className="has-text-info">{query}</span>
      </h5>
      <p className="is-size-3 box">
        {text}
      </p>
      <button className={`button is-primary ${loading && 'is-loading'}`} onClick={setRandomFact}>Generate Random Fact</button>
    </div>
  );
});

export default Result;

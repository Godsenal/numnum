import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../hooks';

const Math: React.SFC = observer(() => {
  const store = useStore();
  const { text } = store.mathStore;
  console.log(store.mathStore.query);
  return (
    <div>
      <input value={store.mathStore.query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => store.mathStore.setQuery(e.target.value)} />
      <button onClick={store.mathStore.fetchMathFact}>Fetch!</button>
      <p>
        {text}
      </p>
    </div>
  )
})

export default Math;
import React from 'react';
import { useLocalStore } from 'mobx-react';
import MathStore from './stores/MathStore';
import storeContext from './context';

const StoreProvider: React.SFC = ({ children }) => {
  const store = useLocalStore(() => ({ mathStore: new MathStore() }));
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  )
}

export default StoreProvider;

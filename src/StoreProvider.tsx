import React from "react";
import { useLocalStore } from "mobx-react";
import NumFactStore from "./stores/NumFact";
import storeContext from "./context";
import { getMathFact } from "./api";
import { NumFact } from "./models/numfact";

const StoreProvider: React.SFC = ({ children }) => {
  const store = useLocalStore(() => ({
    math: new NumFactStore<string, NumFact>("math", getMathFact, "")
  }));
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;

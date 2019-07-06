import React from "react";
import { useLocalStore } from "mobx-react";
import NumFactStore from "./stores/NumFact";
import { NumFact } from "./models/numfact";
import storeContext from "./context";
import { getMathFact, getDateFact, getYearFact, getTriviaFact } from "./api";
import rootStore from "./stores/Root";

const StoreProvider: React.SFC = ({ children }) => {
  const today = new Date();
  const store = useLocalStore(() => ({
    root: rootStore,
    math: new NumFactStore<string, NumFact>("math", getMathFact, ""),
    date: new NumFactStore("date", getDateFact, {
      month: String(today.getMonth() + 1),
      day: String(today.getDay() + 1)
    }),
    year: new NumFactStore<string, NumFact>(
      "year",
      getYearFact,
      String(today.getFullYear())
    ),
    trivia: new NumFactStore<string, NumFact>("year", getTriviaFact, "")
  }));
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;

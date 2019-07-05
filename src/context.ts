import { createContext } from "react";
import NumFactStore from "./stores/NumFact";
import { NumFact } from "./models/numfact";
import { getDateFact, getMathFact, getYearFact, getTriviaFact } from "./api";

export interface ContextType {
  math: NumFactStore<ApiParams<typeof getMathFact>, NumFact>;
  date: NumFactStore<ApiParams<typeof getDateFact>, NumFact>;
  year: NumFactStore<ApiParams<typeof getYearFact>, NumFact>;
  trivia: NumFactStore<ApiParams<typeof getTriviaFact>, NumFact>;
}

const storeContext = createContext<ContextType | null>(null);

export default storeContext;

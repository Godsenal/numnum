import { createContext } from "react";
import NumFactStore from "./stores/NumFact";
import { NumFact } from "./models/numfact";

export interface ContextType {
  math: NumFactStore<string, NumFact>;
}

const storeContext = createContext<ContextType | null>(null);

export default storeContext;

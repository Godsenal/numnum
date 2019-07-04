import { createContext } from 'react';
import MathStore from './stores/MathStore';

export interface ContextType {
  mathStore: MathStore;
}

const storeContext = createContext<ContextType | null>(null);

export default storeContext;
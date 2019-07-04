import { action, observable, decorate } from 'mobx';
import BaseStore from "./BaseStore";
import { NumFact } from "../models/numfact";
import { getMathFact } from "../api";


class MathStore extends BaseStore implements NumFact {
  type = 'math' as const;
  found = false;
  text = '';
  number = 0;

  query = '';
  status: Status = 'INIT';
  error = '';

  fetchMathFact = async () => {
    this.fetchFact(getMathFact);
  }

  setQuery = (query: string) => {
    this.query = query;
  }
}

decorate(MathStore, {
  found: observable,
  text: observable,
  number: observable,

  query: observable,
  status: observable,
  error: observable,

  fetchMathFact: action,
  setQuery: action,
});

export default MathStore;
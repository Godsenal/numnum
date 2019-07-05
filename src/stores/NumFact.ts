import { action, runInAction, observable, decorate } from "mobx";
import { NumFact, NumFactType } from "../models/numfact";

export default class NumFactStore<Q, R extends NumFact> implements NumFact {
  api: ApiCall<Q[], R>;
  status: Status = "INIT";
  error: string = "";

  type: NumFactType;
  query: Q;
  found = false;
  text = "";
  number = 0;

  constructor(type: NumFactType, api: ApiCall<Q[], R>, baseQuery: Q) {
    this.type = type;
    this.api = api;
    this.query = baseQuery;
  }
  fetchFact = async () => {
    this.status = "FETCHING";
    try {
      const { found, text, number } = await this.api(this.query);
      runInAction(() => {
        this.status = "SUCCESS";
        this.found = found;
        this.text = text;
        this.number = number;
      });
    } catch (err) {
      runInAction(() => {
        this.status = "FAILURE";
        this.error = "TEST";
      });
    }
  };

  setQuery = (query: Q) => {
    this.query = query;
  };
}

decorate(NumFactStore, {
  found: observable,
  text: observable,
  number: observable,

  query: observable,
  status: observable,
  error: observable,

  fetchFact: action,
  setQuery: action
});

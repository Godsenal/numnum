import { action, runInAction, observable, decorate } from "mobx";
import rootStore, { RootStore } from './Root';
import { NumFact, NumFactType } from "../models/numfact";

export default class NumFactStore<Q, R extends NumFact> {

  rootStore: RootStore = rootStore;
  api: ApiCall<Q[], R>;
  status: Status = "INIT";
  error: string = "";

  type: NumFactType;
  query: Q;
  response!: R;

  constructor(type: NumFactType, api: ApiCall<Q[], R>, baseQuery: Q) {
    this.type = type;
    this.api = api;
    this.query = baseQuery;
  }
  fetchFact = async () => {
    this.status = "FETCHING";
    try {
      const response = await this.api(this.query);
      runInAction(() => {
        this.status = "SUCCESS";
        this.response = response;
        const { type, text } = response;
        const queryText = typeof this.query === 'string' ? this.query : Object.entries(this.query).reduce((acc, [key, value]) => {
          return `${acc} ${key}: ${value} `;
        }, '');
        this.rootStore.setResult(type, queryText, text);
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
  response: observable,

  query: observable,
  status: observable,
  error: observable,

  fetchFact: action,
  setQuery: action
});
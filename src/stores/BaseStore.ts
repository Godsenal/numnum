import { action, runInAction } from 'mobx';
import { NumFact, NumFactType } from '../models/numfact';

export default abstract class BaseStore implements NumFact {
  abstract status: Status;
  abstract error: string;
  // abstract fetchNumFact(payload: any): void;

  abstract type: NumFactType
  abstract query: any;
  abstract found: boolean;
  abstract text: string;
  abstract number: number;

  @action
  async fetchFact<T extends any[], R extends NumFact>(api: ApiCall<T, R>) {
    this.status = 'FETCHING';
    try {
      const { found, text, number } = await api(...this.query);
      runInAction(() => {
        this.status = 'SUCCESS';
        this.found = found;
        this.text = text;
        this.number = number;
      })
    } catch (err) {
      runInAction(() => {
        this.status = 'FAILURE';
        this.error = 'TEST'
      })
    }
  }
}
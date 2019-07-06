import { decorate, observable, action } from "mobx";
import { NumFactType } from "../models/numfact";

export class RootStore {
  type!: NumFactType;
  query: string = '';
  text: string = '';

  setResult = (type: NumFactType, query: string, text: string) => {
    this.type = type;
    this.query = query;
    this.text = text;
  }
}

decorate(RootStore, {
  type: observable,
  query: observable,
  text: observable,
  setResult: action
});

const rootStore = new RootStore();

export default rootStore;
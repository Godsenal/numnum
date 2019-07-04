import axios from 'axios';
import { NumFact } from './models/numfact';

const instance = axios.create({
  baseURL: "https://numbersapi.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": 'numbersapi.p.rapidapi.com',
    "X-RapidAPI-Key": '84ef304e39msh0f98002525976b8p1f2c3fjsn58f708b48245',
  }
});

export const getMathFact = async (number: string) => {
  const { data } = await instance.get<NumFact>(`/${number}/math?fragment=true&json=true`);
  return data;
}

export default instance;
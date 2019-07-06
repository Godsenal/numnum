import axios from "axios";
import { NumFact, DateNumFact, YearNumFact, NumFactType } from "./models/numfact";

const instance = axios.create({
  baseURL: "https://numbersapi.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    "X-RapidAPI-Key": "84ef304e39msh0f98002525976b8p1f2c3fjsn58f708b48245"
  }
});

export const getMathFact = async (number: string) => {
  const { data } = await instance.get<NumFact>(
    `/${number}/math?fragment=true&json=true`
  );
  return data;
};

export const getDateFact = async ({
  month,
  day
}: {
  month: string;
  day: string;
}) => {
  const { data } = await instance.get<DateNumFact>(
    `/${month}/${day}/date?fragment=true&json=true`
  );
  return data;
};

export const getYearFact = async (year: string) => {
  const { data } = await instance.get<YearNumFact>(
    `/${year}/year?fragment=true&json=true`
  );
  return data;
};

export const getTriviaFact = async (number: string) => {
  const { data } = await instance.get<NumFact>(
    `/${number}/trivia?fragment=true&json=true`
  );
  return data;
};

export const getRandomFact = async (type: NumFactType) => {
  const { data } = await instance.get<NumFact>(
    `/random/${type}?fragment=true&json=true`
  )
  return data;
}

export default instance;

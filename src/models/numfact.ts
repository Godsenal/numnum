export type NumFactType = "date" | "math" | "trivia" | "year";

export interface NumFact {
  type: NumFactType;
  found: boolean;
  text: string;
  number: number;
}

export type DateNumFact = NumFact & { year: number };
export type YearNumFact = NumFact & { date: string };

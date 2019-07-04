export type NumFactType = 'date' | 'math' | 'trivia' | 'year';

export interface NumFact {
  type: NumFactType;
  found: boolean;
  text: string;
  number: number;
}
export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: 'Which is the best Avengers Movie?',
    answer: 'Avengers Endgame'
  },
  {
    id: 2,
    question: 'Who besides Rhot can pick up the hammer?',
    answer: 'Captain America'
  },

];

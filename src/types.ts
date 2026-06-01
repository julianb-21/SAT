export type Step = 1 | 2 | 3 | 4 | 5 | 6;

export interface FormData {
  isParent: boolean | null;
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  currentScore: string;
  callTime: string;
}

export const SCORE_OPTIONS = [
  'Below 800',
  '800–900',
  '900–1000',
  '1000–1100',
  '1100–1200',
  '1200–1300',
  '1300–1400',
  '1400+',
  'Has not taken it yet',
];

export const INPUT_CLASS =
  'w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition text-base';

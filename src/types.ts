export type Step = 1 | 2 | 3;

export interface FormData {
  parentName: string;
  email: string;
}

export const INPUT_CLASS =
  'w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition text-base';

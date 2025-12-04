import { AxiosInstance, AxiosResponse } from 'axios';

export type StudiiAnswerPayload = {
  email: string;
  answers: Array<string | null | number>;
  fbclid?: string;
};

interface Url {
  name: string;
  description?: string;
  logo?: string;
  link: string;
}

export type StudiiAnswerResponse = {
  _id: number;
  email: string;
  quiz?: number;
  answers?: string[];
  status: string;
  styles?: Array<string>;
  conclusion?: string;
  qr_text?: string;
  qr_image?: string;
  urls?: Url[];
  created_at: number;
  updated_at: number;
};

type Cluster = {
  label: string;
  sentences: string[];
  strength: string;
  flaw: string;
  score_reason: string;
  future_logic: string;
};

type Category = {
  title: string;
  score: number;
  result: string;
  clusters: Cluster[];
};

export type PsychProfile = {
  self_sabotage: Category;
  lifestyle: Category;
  mindset: Category;
  relationship: Category;
  recommendations: string[];
  overall_summary: string;
};

export type StudiiServiceProps = (requestInstance?: AxiosInstance) => {
  answers: (payload: StudiiAnswerPayload) => Promise<AxiosResponse<StudiiAnswerResponse>>;
  paymentCheck: (_id: number | string) => Promise<AxiosResponse<StudiiAnswerResponse>>;
};

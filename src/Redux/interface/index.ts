export interface Job {
  id: number;
  logo: string;
  title: string;
  company: string;
  experience: number;
  skills: [string];
  description: string;
  status: boolean;
}

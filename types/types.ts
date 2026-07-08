export type ProjectResult = {
  number: string;
  title: string;
  desc: string;
  progress: number;
};

export type ProjectLink = {
  title: string;
  url: string;
};

export type Project = {
  slug: string;
  img: string;
  title: string;
  status: string;
  statusColor: string;
  tags: string[];
  description: string;
  year: string;
  role: string;
  duration: string;
  overview: string;
  problem?: string;
  solution?: string;
  features?: string[];
  contribution?: string;
  results?: ProjectResult[];
  gallery?: string[];
  links?: ProjectLink[];
};

export type Projects = Project[];

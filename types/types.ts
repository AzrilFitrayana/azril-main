export type ProjectResultProps = {
  number: string;
  title: string;
  desc: string;
  progress: number;
};

export type ProjectLinkProps = {
  title: string;
  url: string;
};

export type HeroProjectProps = Pick<
  Project,
  | "img"
  | "title"
  | "category"
  | "status"
  | "statusColor"
  | "description"
  | "year"
  | "role"
  | "duration"
>;

export type Project = {
  slug: string;
  img: string;
  title: string;
  category: string;
  status: string;
  statusColor: string;
  description: string;
  year: string;
  role: string;
  duration?: string;
  stack: string[];
  overview: string;
  problem?: string;
  solution?: string;
  features?: string[];
  contribution?: string;
  results?: ProjectResultProps[];
  gallery?: string[];
  links?: ProjectLinkProps[];
};

export type Projects = Project[];

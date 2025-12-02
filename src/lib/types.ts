export type Alloy = {
  id: string;
  name: string;
  composition: string;
  description: string;
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  content: string;
  imageId: string;
};

export type Tutorial = {
  id: string;
  title: string;
  description: string;
  url: string;
  imageId: string;
};

export type CommunityPost = {
  id: string;
  title: string;
  author: string;
  authorImageId: string;
  date: string;
  replies: number;
  content: string;
};

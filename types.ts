
export interface CastMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface FilmStill {
  url: string;
  caption: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Award {
  name: string;
  festival: string;
  year: string;
  icon: string;
}


import React from 'react';
import { CastMember, FilmStill, Award } from './types';

export const FILM_INFO = {
  title: "The Last Echo",
  tagline: "In the silence of the void, your voice is all that remains.",
  synopsis: "Year 2084. After Earth's atmosphere became a graveyard of silence, Maya, a lone radio operator at the edge of the world, receives a signal that shouldn't exist. As she unravels the mystery of the transmission, she must confront the echoes of her own past and decide if the truth is worth breaking the silence.",
  director: "Sofia Rossi",
  duration: "18 mins",
  genre: "Sci-Fi / Psychological Drama",
  releaseDate: "Coming Winter 2025"
};

export const CAST: CastMember[] = [
  {
    id: "1",
    name: "Elena Vance",
    role: "Maya",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "Known for her subtle emotional depth, Elena brings Maya's isolation to life."
  },
  {
    id: "2",
    name: "Marcus Thorne",
    role: "The Voice",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "A haunting performance that challenges everything Maya believes."
  },
  {
    id: "3",
    name: "Sarah Chen",
    role: "Commander Zhang",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "The strict authority figure connecting Maya to the world she left behind."
  }
];

export const STILLS: FilmStill[] = [
  { 
    url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1920", 
    caption: "The Radio Tower" 
  },
  { 
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920", 
    caption: "The Mysterious Signal" 
  },
  { 
    url: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1920", 
    caption: "A Moment of Reflection" 
  },
  { 
    url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1920", 
    caption: "The Final Stand" 
  }
];

export const AWARDS: Award[] = [
  { name: "Best Short Film", festival: "Tri-City Film Fest", year: "2024", icon: "🏆" },
  { name: "Excellence in Cinematography", festival: "Visuals United", year: "2024", icon: "⭐" },
  { name: "Official Selection", festival: "Future Cinema 2025", year: "2025", icon: "🎞️" }
];

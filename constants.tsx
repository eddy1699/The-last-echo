
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
    image: "https://picsum.photos/seed/elena/400/500",
    description: "Known for her subtle emotional depth, Elena brings Maya's isolation to life."
  },
  {
    id: "2",
    name: "Marcus Thorne",
    role: "The Voice",
    image: "https://picsum.photos/seed/marcus/400/500",
    description: "A haunting performance that challenges everything Maya believes."
  },
  {
    id: "3",
    name: "Sarah Chen",
    role: "Commander Zhang",
    image: "https://picsum.photos/seed/sarah/400/500",
    description: "The strict authority figure connecting Maya to the world she left behind."
  }
];

export const STILLS: FilmStill[] = [
  { url: "https://picsum.photos/seed/film1/1200/600", caption: "The Radio Tower" },
  { url: "https://picsum.photos/seed/film2/1200/600", caption: "The Mysterious Signal" },
  { url: "https://picsum.photos/seed/film3/1200/600", caption: "A Moment of Reflection" },
  { url: "https://picsum.photos/seed/film4/1200/600", caption: "The Final Stand" }
];

export const AWARDS: Award[] = [
  { name: "Best Short Film", festival: "Tri-City Film Fest", year: "2024", icon: "🏆" },
  { name: "Excellence in Cinematography", festival: "Visuals United", year: "2024", icon: "⭐" },
  { name: "Official Selection", festival: "Future Cinema 2025", year: "2025", icon: "🎞️" }
];

export interface Movies {
  id: string;
  url: string;
  primaryTitle: string;
  originalTitle: string;
  type: string;
  description: string;
  primaryImage: string;
  thumbnails: Thumbnail[];
  trailer?: string;
  contentRating?: string;
  startYear: number;
  endYear: any;
  releaseDate?: string;
  interests: string[];
  countriesOfOrigin: string[];
  externalLinks: string[];
  spokenLanguages: string[];
  filmingLocations: string[];
  productionCompanies: ProductionCompany[];
  budget?: number;
  grossWorldwide?: number;
  genres: string[];
  isAdult: boolean;
  runtimeMinutes: number;
  averageRating: number;
  numVotes: number;
  metascore?: number;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ProductionCompany {
  id: string;
  name: string;
}

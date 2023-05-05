interface IInfo {
  fields: {
    count: string;
    next: string;
    pages: string;
    prev: string;
  };
}

interface ICharacter {
  arguments: {
    id: string;
  };
  fields: {
    created: string;
    episode: () => IEpisode;
    gender: string;
    id: string;
    image: string;
    location: () => ILocation;
    name: string;
    origin: () => ILocation;
    species: string;
    status: string;
    type: string;
  };
}

interface IEpisode {
  fields: {
    air_date: string;
    characters: () => ICharacter;
    created: string;
    episode: string;
    id: string;
    name: string;
  };
}

interface ILocation {
  fields: {
    created: string;
    dimension: string;
    id: string;
    name: string;
    residents: () => ICharacter;
    type: string;
  };
}

interface IFilterEpisode {
  fields: {
    episode: string;
    name: string;
  };
}

interface IEpisodes {
  arguments: {
    filter: () => IFilterEpisode;
    page: string;
  };
  fields: {
    info: () => IInfo;
    results: () => IEpisode;
  };
}

interface IEpisodesByIds {
  arguments: {
    ids: string;
  };
  fields: {
    air_date: string;
    characters: () => ICharacter;
    created: string;
    episode: string;
    id: string;
    name: string;
  };
}

interface IFilterLocation {
  fields: {
    dimension: string;
    name: string;
    type: string;
  };
}

interface ILocations {
  arguments: {
    filter: () => IFilterLocation;
    page: string;
  };
  fields: {
    info: () => IInfo;
    results: () => ILocation;
  };
}

interface ILocationsByIds {
  arguments: {
    ids: string;
  };
  fields: {
    created: string;
    dimension: string;
    id: string;
    name: string;
    residents: () => ICharacter;
    type: string;
  };
}

interface IFilterCharacter {
  fields: {
    gender: string;
    name: string;
    species: string;
    status: string;
    type: string;
  };
}

interface ICharacters {
  arguments: {
    filter: () => IFilterCharacter;
    page: string;
  };
  fields: {
    info: () => IInfo;
    results: () => ICharacter;
  };
}

interface ICharactersByIds {
  arguments: {
    ids: string;
  };
  fields: {
    created: string;
    episode: () => IEpisode;
    gender: string;
    id: string;
    image: string;
    location: () => ILocation;
    name: string;
    origin: () => ILocation;
    species: string;
    status: string;
    type: string;
  };
}

interface IQuery {
  fields: {
    character: () => ICharacter;
    characters: () => ICharacters;
    charactersByIds: () => ICharactersByIds;
    episode: () => IEpisode;
    episodes: () => IEpisodes;
    episodesByIds: () => IEpisodesByIds;
    location: () => ILocation;
    locations: () => ILocations;
    locationsByIds: () => ILocationsByIds;
  };
}

export interface IRoot {
  fields: {
    query: () => IQuery;
  };
}

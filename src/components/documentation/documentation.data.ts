import { IRoot } from './documentation.interfaces';

class Info {
  fields = {
    count: 'Int',
    next: 'Int',
    pages: 'Int',
    prev: 'Int',
  };
}

class Character {
  arguments = {
    id: 'ID',
  };
  fields = {
    created: 'String',
    episode: () => new Episode(),
    gender: 'String',
    id: 'ID',
    image: 'String',
    location: () => new Location(),
    name: 'String',
    origin: () => new Location(),
    species: 'String',
    status: 'String',
    type: 'String',
  };
}

class Episode {
  fields = {
    air_date: 'String',
    characters: () => new Character(),
    created: 'String',
    episode: 'String',
    id: 'ID',
    name: 'String',
  };
}

class Location {
  fields = {
    created: 'String',
    dimension: 'String',
    id: 'ID',
    name: 'String',
    residents: () => new Character(),
    type: 'String',
  };
}

class FilterEpisode {
  fields = {
    episode: 'String',
    name: 'String',
  };
}

class Episodes {
  arguments = {
    filter: () => new FilterEpisode(),
    page: 'Int',
  };
  fields = {
    info: () => new Info(),
    results: () => new Episode(),
  };
}

class EpisodesByIds {
  arguments = {
    ids: 'ID',
  };
  fields = {
    air_date: 'String',
    characters: () => new Character(),
    created: 'String',
    episode: 'String',
    id: 'ID',
    name: 'String',
  };
}

class FilterLocation {
  fields = {
    dimension: 'String',
    name: 'String',
    type: 'String',
  };
}

class Locations {
  arguments = {
    filter: () => new FilterLocation(),
    page: 'Int',
  };
  fields = {
    info: () => new Info(),
    results: () => new Location(),
  };
}

class LocationsByIds {
  arguments = {
    ids: 'ID',
  };
  fields = {
    created: 'String',
    dimension: 'String',
    id: 'ID',
    name: 'String',
    residents: () => new Character(),
    type: 'String',
  };
}

class FilterCharacter {
  fields = {
    gender: 'String',
    name: 'String',
    species: 'String',
    status: 'String',
    type: 'String',
  };
}

class Characters {
  arguments = {
    filter: () => new FilterCharacter(),
    page: 'Int',
  };
  fields = {
    info: () => new Info(),
    results: () => new Character(),
  };
}

class CharactersByIds {
  arguments = {
    ids: 'ID',
  };
  fields = {
    created: 'String',
    episode: () => new Episode(),
    gender: 'String',
    id: 'ID',
    image: 'String',
    location: () => new Location(),
    name: 'String',
    origin: () => new Location(),
    species: 'String',
    status: 'String',
    type: 'String',
  };
}

class Query {
  fields = {
    character: () => new Character(),
    characters: () => new Characters(),
    charactersByIds: () => new CharactersByIds(),
    episode: () => new Episode(),
    episodes: () => new Episodes(),
    episodesByIds: () => new EpisodesByIds(),
    location: () => new Location(),
    locations: () => new Locations(),
    locationsByIds: () => new LocationsByIds(),
  };
}

class Root {
  fields = {
    query: () => new Query(),
  };
}

export function getData(): IRoot {
  return new Root();
}

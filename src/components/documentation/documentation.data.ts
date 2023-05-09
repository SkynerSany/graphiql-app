import { IRoot, TAllNodes } from './documentation.interfaces';

class Info {
  fields = {
    count: 'Int',
    next: 'Int',
    pages: 'Int',
    prev: 'Int',
  };
  checked = {
    count: false,
    next: false,
    pages: false,
    prev: false,
  };
  fieldsType = {
    count: 'Int',
    next: 'Int',
    pages: 'Int',
    prev: 'Int',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Character {
  arguments = {
    id: 'ID',
  };
  checked = {
    created: false,
    episode: false,
    gender: false,
    id: false,
    image: false,
    location: false,
    name: false,
    origin: false,
    species: false,
    status: false,
    type: false,
  };
  fields = {
    created: 'String',
    episode: () => new Episode(this),
    gender: 'String',
    id: 'ID',
    image: 'String',
    location: () => new Location(this),
    name: 'String',
    origin: () => new Location(this),
    species: 'String',
    status: 'String',
    type: 'String',
  };
  fieldsType = {
    created: 'String',
    episode: 'Episode',
    gender: 'String',
    id: 'ID',
    image: 'String',
    location: 'Location',
    name: 'String',
    origin: 'Location',
    species: 'String',
    status: 'String',
    type: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Episode {
  fields = {
    air_date: 'String',
    characters: () => new Character(this),
    created: 'String',
    episode: 'String',
    id: 'ID',
    name: 'String',
  };
  checked = {
    air_date: false,
    characters: false,
    created: false,
    episode: false,
    id: false,
    name: false,
  };
  fieldsType = {
    air_date: 'String',
    characters: 'Character',
    created: 'String',
    episode: 'String',
    id: 'ID',
    name: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Location {
  fields = {
    created: 'String',
    dimension: 'String',
    id: 'ID',
    name: 'String',
    residents: () => new Character(this),
    type: 'String',
  };
  checked = {
    created: false,
    dimension: false,
    id: false,
    name: false,
    residents: false,
    type: false,
  };
  fieldsType = {
    created: 'String',
    dimension: 'String',
    id: 'ID',
    name: 'String',
    residents: 'Character',
    type: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class FilterEpisode {
  fields = {
    episode: 'String',
    name: 'String',
  };
  checked = {
    episode: false,
    name: false,
  };
  fieldsType = {
    episode: 'String',
    name: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Episodes {
  arguments = {
    filter: () => new FilterEpisode(this),
    page: 'Int',
  };
  fields = {
    info: () => new Info(this),
    results: () => new Episode(this),
  };
  checked = {
    info: false,
    results: false,
  };
  fieldsType = {
    info: 'Info',
    results: 'Episode',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class EpisodesByIds {
  arguments = {
    ids: 'ID',
  };
  fields = {
    air_date: 'String',
    characters: () => new Character(this),
    created: 'String',
    episode: 'String',
    id: 'ID',
    name: 'String',
  };
  checked = {
    air_date: false,
    characters: false,
    created: false,
    episode: false,
    id: false,
    name: false,
  };
  fieldsType = {
    air_date: 'String',
    characters: 'Character',
    created: 'String',
    episode: 'String',
    id: 'ID',
    name: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class FilterLocation {
  fields = {
    dimension: 'String',
    name: 'String',
    type: 'String',
  };
  checked = {
    dimension: false,
    name: false,
    type: false,
  };
  fieldsType = {
    dimension: 'String',
    name: 'String',
    type: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Locations {
  arguments = {
    filter: () => new FilterLocation(this),
    page: 'Int',
  };
  fields = {
    info: () => new Info(this),
    results: () => new Location(this),
  };
  checked = {
    info: false,
    results: false,
  };
  fieldsType = {
    info: () => 'Info',
    results: () => 'Location',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
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
    residents: () => new Character(this),
    type: 'String',
  };
  checked = {
    created: false,
    dimension: false,
    id: false,
    name: false,
    residents: false,
    type: false,
  };
  fieldsType = {
    created: 'String',
    dimension: 'String',
    id: 'ID',
    name: 'String',
    residents: 'Character',
    type: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class FilterCharacter {
  fields = {
    gender: 'String',
    name: 'String',
    species: 'String',
    status: 'String',
    type: 'String',
  };
  checked = {
    gender: false,
    name: false,
    species: false,
    status: false,
    type: false,
  };
  fieldsType = {
    gender: 'String',
    name: 'String',
    species: 'String',
    status: 'String',
    type: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Characters {
  arguments = {
    filter: () => new FilterCharacter(this),
    page: 'Int',
  };
  fields = {
    info: () => new Info(this),
    results: () => new Character(this),
  };
  checked = {
    info: false,
    results: false,
  };
  fieldsType = {
    info: 'Info',
    results: 'Info',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class CharactersByIds {
  arguments = {
    ids: 'ID',
  };
  fields = {
    created: 'String',
    episode: () => new Episode(this),
    gender: 'String',
    id: 'ID',
    image: 'String',
    location: () => new Location(this),
    name: 'String',
    origin: () => new Location(this),
    species: 'String',
    status: 'String',
    type: 'String',
  };
  checked = {
    created: false,
    episode: false,
    gender: false,
    id: false,
    image: false,
    location: false,
    name: false,
    origin: false,
    species: false,
    status: false,
    type: false,
  };
  fieldsType = {
    created: 'String',
    episode: 'Episode',
    gender: 'String',
    id: 'ID',
    image: 'String',
    location: 'Location',
    name: 'String',
    origin: 'Location',
    species: 'String',
    status: 'String',
    type: 'String',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Query {
  fields = {
    character: () => new Character(this),
    characters: () => new Characters(this),
    charactersByIds: () => new CharactersByIds(this),
    episode: () => new Episode(this),
    episodes: () => new Episodes(this),
    episodesByIds: () => new EpisodesByIds(this),
    location: () => new Location(this),
    locations: () => new Locations(this),
    locationsByIds: () => new LocationsByIds(this),
  };
  checked = {
    character: false,
    characters: false,
    charactersByIds: false,
    episode: false,
    episodes: false,
    episodesByIds: false,
    location: false,
    locations: false,
    locationsByIds: false,
  };
  fieldsType = {
    character: 'Character',
    characters: 'Characters',
    charactersByIds: 'CharactersByIds',
    episode: 'Episode',
    episodes: 'Episodes',
    episodesByIds: 'EpisodesByIds',
    location: 'Location',
    locations: 'Locations',
    locationsByIds: 'LocationsByIds',
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Root {
  fields = {
    query: () => new Query(this),
  };
  checked = {
    query: false,
  };
  fieldsType = {
    query: 'Query',
  };
}

export function getDocumentationInitialData(): IRoot {
  return new Root();
}

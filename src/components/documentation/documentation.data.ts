import { INode, TAllNodes } from './documentation.interfaces';

class BaseNode {
  node!: () => INode;
  checked!: boolean;
  type!: string;
}

class Node {
  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class NoChildNode {
  node = 'String';
  checked = false;
  type = 'String';
}

class InfoNode extends BaseNode {
  constructor(parent: INode) {
    super();
    this.node = () => new Info(parent);
    this.checked = false;
    this.type = 'Info';
  }
}

class CharacterNode extends BaseNode {
  constructor(parent: INode) {
    super();
    this.node = () => new Character(parent);
    this.checked = false;
    this.type = 'Character';
  }
}

class LocationNode extends BaseNode {
  constructor(parent: INode) {
    super();
    this.node = () => new Location(parent);
    this.checked = false;
    this.type = 'Location';
  }
}

class EpisodeNode extends BaseNode {
  constructor(parent: INode) {
    super();
    this.node = () => new Episode(parent);
    this.checked = false;
    this.type = 'Episode';
  }
}

class Info {
  fields = {
    count: new NoChildNode(),
    next: new NoChildNode(),
    pages: new NoChildNode(),
    prev: new NoChildNode(),
  };

  parent: TAllNodes;
  constructor(parent: TAllNodes) {
    this.parent = parent;
  }
}

class Character extends Node {
  arguments = {
    id: new NoChildNode(),
  };
  fields = {
    created: new NoChildNode(),
    episode: new EpisodeNode(this),
    gender: new NoChildNode(),
    id: new NoChildNode(),
    image: new NoChildNode(),
    location: new LocationNode(this),
    name: new NoChildNode(),
    origin: new LocationNode(this),
    species: new NoChildNode(),
    status: new NoChildNode(),
    type: new NoChildNode(),
  };
}

class Episode extends Node {
  fields = {
    air_date: new NoChildNode(),
    characters: new CharacterNode(this),
    created: new NoChildNode(),
    episode: new NoChildNode(),
    id: new NoChildNode(),
    name: new NoChildNode(),
  };
}

class Location extends Node {
  fields = {
    created: new NoChildNode(),
    dimension: new NoChildNode(),
    id: new NoChildNode(),
    name: new NoChildNode(),
    residents: new CharacterNode(this),
    type: new NoChildNode(),
  };
}

class FilterEpisode extends Node {
  fields = {
    episode: new NoChildNode(),
    name: new NoChildNode(),
  };
}

class Episodes extends Node {
  arguments = {
    filter: {
      node: () => new FilterEpisode(this),
      checked: false,
      type: 'FilterEpisode',
    },
    page: new NoChildNode(),
  };
  fields = {
    info: new InfoNode(this),
    results: new EpisodeNode(this),
  };
}

class EpisodesByIds extends Node {
  arguments = {
    ids: new NoChildNode(),
  };
  fields = {
    air_date: new NoChildNode(),
    characters: new CharacterNode(this),
    created: new NoChildNode(),
    episode: new NoChildNode(),
    id: new NoChildNode(),
    name: new NoChildNode(),
  };
}

class FilterLocation extends Node {
  fields = {
    dimension: new NoChildNode(),
    name: new NoChildNode(),
    type: new NoChildNode(),
  };
}

class Locations extends Node {
  arguments = {
    filter: {
      node: () => new FilterLocation(this),
      checked: false,
      type: 'FilterLocation',
    },
    page: new NoChildNode(),
  };
  fields = {
    info: new InfoNode(this),
    results: new LocationNode(this),
  };
}

class LocationsByIds extends Node {
  arguments = {
    ids: new NoChildNode(),
  };
  fields = {
    created: new NoChildNode(),
    dimension: new NoChildNode(),
    id: new NoChildNode(),
    name: new NoChildNode(),
    residents: new CharacterNode(this),
    type: new NoChildNode(),
  };
}

class FilterCharacter extends Node {
  fields = {
    gender: new NoChildNode(),
    name: new NoChildNode(),
    species: new NoChildNode(),
    status: new NoChildNode(),
    type: new NoChildNode(),
  };
}

class Characters extends Node {
  arguments = {
    filter: {
      node: () => new FilterCharacter(this),
      checked: false,
      type: 'FilterCharacter',
    },
    page: new NoChildNode(),
  };
  fields = {
    info: new InfoNode(this),
    results: new CharacterNode(this),
  };
}

class CharactersByIds extends Node {
  arguments = {
    ids: new NoChildNode(),
  };
  fields = {
    created: new NoChildNode(),
    episode: new EpisodeNode(this),
    gender: new NoChildNode(),
    id: new NoChildNode(),
    image: new NoChildNode(),
    location: new LocationNode(this),
    name: new NoChildNode(),
    origin: new LocationNode(this),
    species: new NoChildNode(),
    status: new NoChildNode(),
    type: new NoChildNode(),
  };
}

class Query extends Node {
  fields = {
    character: new CharacterNode(this),
    characters: {
      node: () => new Characters(this),
      checked: false,
      type: 'Characters',
    },
    charactersByIds: {
      node: () => new CharactersByIds(this),
      checked: false,
      type: 'CharactersByIds',
    },
    episode: new EpisodeNode(this),
    episodes: {
      node: () => new Episodes(this),
      checked: false,
      type: 'Episodes',
    },
    episodesByIds: {
      node: () => new EpisodesByIds(this),
      checked: false,
      type: 'EpisodesByIds',
    },
    location: new LocationNode(this),
    locations: {
      node: () => new Locations(this),
      checked: false,
      type: 'Locations',
    },
    locationsByIds: {
      node: () => new LocationsByIds(this),
      checked: false,
      type: 'LocationsByIds',
    },
  };
}

class Root {
  fields = {
    query: {
      node: () => new Query(this),
      checked: false,
      type: 'Query',
    },
  };
}

export function getDocumentationInitialData(): INode {
  return new Root();
}

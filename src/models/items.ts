export interface Item {
  name: string;
  id: string;
  image512pxLink: string; // A string representing a URL
  wikiLink: string; // A string representing a URL
}

export interface ItemRequirement extends Item {
  count: number;
  foundInRaid: boolean;
}

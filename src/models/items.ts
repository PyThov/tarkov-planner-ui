export interface Item {
  name: string;
  id: string;
  image512pxLink: string; // A string representing a URL
  wikiLink: string; // A string representing a URL
}

export interface ItemRequirement {
  count: number;
  foundInRaid: boolean;
  items: Item[];
}

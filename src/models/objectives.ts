import { Item } from "./items";

export interface Objective {
  description: string;
  id: string;
  count: number;
  foundInRaid: boolean;
  items: Item[];
  type: string;
}

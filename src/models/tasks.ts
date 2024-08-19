import { ItemRequirement } from "./items";
import { Objective } from "./objectives";

export interface Map {
  name: string;
  wiki: string; // A string representing a URL
}

export interface Trader {
  name: string;
  imageLink: string; // A string representing a URL
}

export interface TaskRequirementTask {
  name: string;
}

export interface TaskRequirement {
  task: { [key: string]: string }; // Dict[str, str] is represented as an object with string keys and string values
}

export interface Task {
  id?: string;
  name?: string;
  kappaRequired?: boolean;
  trader?: Trader | null; // Optional or can be null
  map?: Map | null; // Assuming Map is defined elsewhere
  wikiLink: string; // A string representing a URL
  taskImageLink?: string | null; // A string representing a URL
  minPlayerLevel?: number;
  taskRequirements?: TaskRequirement[];
  objectives?: Objective[]; // Assuming Objective is defined elsewhere
}

export interface Tasks {
  tasks: Task[];
  total: number;
  count: number;
  offset: number;
}

export interface TaskDependencies {
  name: string;
  tasks: Task[];
  items: ItemRequirement[];
  itemsTotal: number;
  tasksTotal: number;
  levelRequired: number;
}

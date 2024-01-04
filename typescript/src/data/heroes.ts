export const heroes: Hero[] = [
  {
    id: "capi",
    name: "Capitan America",
    owner: "Marvel",
  },
  {
    id: "iron",
    name: "Iron Man",
    owner: "Marvel",
  },
  {
    id: "spider",
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: "superman",
    name: "Superman",
    owner: "Dc",
  },
  {
    id: "batman",
    name: "Batman",
    owner: "Dc",
  },
  {
    id: "flash",
    name: "Flash",
    owner: "Dc",
  },
];

export interface Hero {
  id: string;
  name: string;
  owner: string;
}

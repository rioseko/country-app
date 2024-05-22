export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  idd: Idd;
  capital: string[];
  region: string;
  flag: string;
  population: number;
  timezones: string[];
  continents: string[];
  flags: Flags;
}


export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}


export interface Name {
  common: string;
  official: string;
}
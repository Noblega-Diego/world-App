export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag?:        string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  KES?: Aed;
  EUR?: Aed;
  XPF?: Aed;
  SLL?: Aed;
  MGA?: Aed;
  NGN?: Aed;
  JOD?: Aed;
  LYD?: Aed;
  GYD?: Aed;
  MXN?: Aed;
  TMT?: Aed;
  AUD?: Aed;
  PAB?: Aed;
  USD?: Aed;
  SCR?: Aed;
  DZD?: Aed;
  SEK?: Aed;
  CHF?: Aed;
  ETB?: Aed;
  SOS?: Aed;
  RUB?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  NZD?: Aed;
  XAF?: Aed;
  TTD?: Aed;
  MKD?: Aed;
  COP?: Aed;
  IRR?: Aed;
  AED?: Aed;
  ZAR?: Aed;
  CZK?: Aed;
  HUF?: Aed;
  PEN?: Aed;
  XOF?: Aed;
  SSP?: Aed;
  SBD?: Aed;
  ANG?: Aed;
  TRY?: Aed;
  BWP?: Aed;
  HTG?: Aed;
  JPY?: Aed;
  SDG?: BAM;
  UGX?: Aed;
  KZT?: Aed;
  MDL?: Aed;
  PYG?: Aed;
  DKK?: Aed;
  EGP?: Aed;
  ILS?: Aed;
  STN?: Aed;
  HNL?: Aed;
  DOP?: Aed;
  RWF?: Aed;
  KMF?: Aed;
  OMR?: Aed;
  THB?: Aed;
  AMD?: Aed;
  KWD?: Aed;
  SHP?: Aed;
  GEL?: Aed;
  BIF?: Aed;
  XCD?: Aed;
  KHR?: Aed;
  LSL?: Aed;
  KYD?: Aed;
  VUV?: Aed;
  BOB?: Aed;
  GBP?: Aed;
  TOP?: Aed;
  MYR?: Aed;
  CDF?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  DJF?: Aed;
  CLP?: Aed;
  BAM?: BAM;
  SGD?: Aed;
  SRD?: Aed;
  SZL?: Aed;
  CNY?: Aed;
  NIO?: Aed;
  CAD?: Aed;
  LKR?: Aed;
  JMD?: Aed;
  HRK?: Aed;
  PKR?: Aed;
  HKD?: Aed;
  LBP?: Aed;
  MUR?: Aed;
  GNF?: Aed;
  ERN?: Aed;
  BBD?: Aed;
  TJS?: Aed;
  MOP?: Aed;
  BYN?: Aed;
  ZMW?: Aed;
  ISK?: Aed;
  VND?: Aed;
  BRL?: Aed;
  MMK?: Aed;
  PHP?: Aed;
  ALL?: Aed;
  QAR?: Aed;
  VES?: Aed;
  GIP?: Aed;
  WST?: Aed;
  LRD?: Aed;
  BZD?: Aed;
  YER?: Aed;
  TZS?: Aed;
  BMD?: Aed;
  MNT?: Aed;
  PLN?: Aed;
  BND?: Aed;
  NPR?: Aed;
  ARS?: Aed;
  GGP?: Aed;
  MVR?: Aed;
  MWK?: Aed;
  SYP?: Aed;
  KID?: Aed;
  KGS?: Aed;
  UZS?: Aed;
  BHD?: Aed;
  IDR?: Aed;
  AWG?: Aed;
  BDT?: Aed;
  GTQ?: Aed;
  BSD?: Aed;
  UYU?: Aed;
  FKP?: Aed;
  BGN?: Aed;
  PGK?: Aed;
  CRC?: Aed;
  NOK?: Aed;
  FJD?: Aed;
  KRW?: Aed;
  KPW?: Aed;
  TWD?: Aed;
  IMP?: Aed;
  AOA?: Aed;
  TND?: Aed;
  FOK?: Aed;
  GHS?: Aed;
  IQD?: Aed;
  RSD?: Aed;
  BTN?: Aed;
  INR?: Aed;
  RON?: Aed;
  AFN?: Aed;
  JEP?: Aed;
  SAR?: Aed;
  AZN?: Aed;
  ZWL?: Aed;
  TVD?: Aed;
  UAH?: Aed;
  MZN?: Aed;
  NAD?: Aed;
  GMD?: Aed;
  CKD?: Aed;
  CVE?: Aed;
  LAK?: Aed;
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

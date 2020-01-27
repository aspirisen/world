export type SortDirection = 'asc' | 'desc';

export interface MatchParams {
    region?: string;
    country?: string;
}

export interface QueryFilter {
    search?: string;
    sort?: SortDirection
}

export interface Currency {
    code: string;
    name: string;
    symbol?: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
}

export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Record<string, string>;
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
}
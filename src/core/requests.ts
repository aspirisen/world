import { Country } from './types';

export const load = async () => {
    const raw = await fetch('https://restcountries.eu/rest/v2/all');
    const regions: Country[] = await raw.json();
    return regions;
};
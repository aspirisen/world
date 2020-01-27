import React from 'react';
import { Country } from './types';

export const Storage = React.createContext<Country[]>([]);
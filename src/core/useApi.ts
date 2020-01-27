import React from 'react'
import { load } from './requests';
import { Country } from './types';

export function useApi() {
    const [countries, setCountries] = React.useState<Country[] | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await load();
                const withoutEmptyRegion = data.map(r => {
                    if (r.region === '') {
                        return { ...r, region: 'Other' }
                    } else {
                        return r;
                    }
                })
                setCountries(withoutEmptyRegion);
            } catch (e) {
                console.log(e);
                setHasError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData();
    }, []);

    return { isLoading, hasError, countries }
}
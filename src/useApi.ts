import React from 'react';

export function useApi() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);
    const [data, setData] = React.useState<any>(null);

    React.useEffect(() => {
        const load = async () => {
            try {
                const rawData = await fetch('https://restcountries.eu/rest/v2/all');
                const parsedData = await rawData.json();
                setIsLoading(false);

                const map = parsedData.reduce((hash: any, country: any) => {
                    if (!hash[country.region]) {
                        hash[country.region] = []
                    }

                    hash[country.region].push(country)
                    return hash;
                }, {})

                setData(map);
            } catch (e) {
                console.error(e);
                setHasError(true);
            }
        }

        load();

    }, []);

    return { isLoading, data, hasError, }
}
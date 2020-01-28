import React from 'react';
import { useNavigation } from './useNavigation';

export function useFilter<T>(data: T[], getName: (item: T) => string) {
    const { query } = useNavigation();

    const filtered = React.useMemo(() => {
        const searched = data.filter(i => {
            const name = getName(i);
            const search = query?.search?.trim().toLowerCase();
            const found = search ? name.toLowerCase().search(search) >= 0 : true;
            return found;
        });

        const sorted = searched.sort((a, b) => {
            const aName = getName(a);
            const bName = getName(b);

            if (aName > bName) {
                return query.sort === 'asc' ? 1 : -1;
            }

            if (bName > aName) {
                return query.sort === 'asc' ? -1 : 1;
            }

            return 0;
        });

        return sorted
    }, [data, getName, query])

    return filtered
}
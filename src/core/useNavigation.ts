
import React from 'react'
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import { QueryFilter } from "./types";

export function useNavigation() {
    const location = useLocation();
    const history = useHistory();

    const query = React.useMemo(() => {
        const parsedQuery: QueryFilter = qs.parse(location.search);

        if (!parsedQuery.sort) {
            parsedQuery.sort = 'asc'
        }

        if (!parsedQuery.search) {
            parsedQuery.search = ''
        }

        return parsedQuery
    }, [location.search]);

    const setQuery = React.useCallback((value: QueryFilter) => {
        const newQuery = qs.stringify({ ...query, ...value })
        history.replace(`${location.pathname}?${newQuery}`);
    }, [history, location.pathname, query]);

    return {
        query,
        setQuery
    }
}
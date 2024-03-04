import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    if (!query) {
        return {
            page: '1',
            prevPage: () => {},
            nextPage: () => {}
        };
    }

    const page = query.get('page');
    return {
        page,
        prevPage: () => setQuery(prev => {
            if (prev) {
                prev.set('page', (+prev.get('page') - 1).toString());
                return prev;
            }
        }),
        nextPage: () => setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    };
};


export {
    usePageQuery
};
import {useEffect, useState} from 'react';
import ListContainer from '../containers/ListContainer';
import {getIssuesList} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';
import {IntersectionCB, useIntersection} from '../hooks/useIntersection';

const List = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [issues, setIssues] = useState();

    const handleIntersection: IntersectionCB = async entries => {
        const {isIntersecting} = entries[0];

        if (!isLoading && isIntersecting) {
            console.info('out', page);
            await setPage(prev => prev + 1);
            await setIsLoading(true);

            await getIssuesList({
                owner: TARGET_GITHUB.OWNER,
                repo: TARGET_GITHUB.REPO,
                per_page: 30,
                page: page,
            })
                .then(res => {
                    if (res.status === 200) {
                        setIssues(prev => {
                            return prev ? [...prev, ...res.data] : res.data;
                        });
                        setIsLoading(false);
                    }
                })
                .catch(console.error);
        }
    };

    const {ref, observer} = useIntersection<HTMLDivElement>({
        handleIntersection,
    });

    useEffect(() => {
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <ListContainer data={issues} intersectionRef={ref} />
        </>
    );
};

export default List;

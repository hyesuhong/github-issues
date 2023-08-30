import {useEffect, useState} from 'react';
import ListContainer from '../containers/ListContainer';
import {getIssuesList} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';
import {IntersectionCB, useIntersection} from '../hooks/useIntersection';

const List = () => {
    const [page, setPage] = useState(1);
    const [issues, setIssues] = useState();
    const handleIntersection: IntersectionCB = entries => {
        const {isIntersecting, intersectionRatio} = entries[0];
        const intersectionRatioPercent = Math.floor(intersectionRatio * 100);

        console.info(isIntersecting, intersectionRatioPercent);

        if (!isIntersecting && intersectionRatioPercent === 0) {
            getIssuesList({
                owner: TARGET_GITHUB.OWNER,
                repo: TARGET_GITHUB.REPO,
                per_page: 30,
                page: page,
            })
                .then(res => {
                    setIssues(prev => {
                        return prev ? [...prev, ...res.data] : res.data;
                    });
                    setPage(prev => prev + 1);
                })
                .catch(console.error);
        }
    };
    const {ref, observer} = useIntersection<HTMLUListElement>({
        handleIntersection,
        thresholds: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: ['-101%', 0, 0],
    });
    useEffect(() => {
        return () => observer.disconnect();
    }, [page]);

    return (
        <>
            <ListContainer data={issues} intersectionRef={ref} />
        </>
    );
};

export default List;

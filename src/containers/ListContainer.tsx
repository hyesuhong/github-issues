import {useRecoilValue} from 'recoil';
import IssueList from '../components/issues/IssueList';
import {issuesState} from '../atom';
import {useIntersection} from '../hooks/useIntersection';
import {useEffect} from 'react';
import Spinner from '../components/Spinner';
import useGetIssues from '../hooks/useGetIssues';

const ListContainer = () => {
    const {data, isLoading, hasNext} = useRecoilValue(issuesState);
    const isInitialFetch = data.length < 1;

    const {getIssues, getNextIssues} = useGetIssues();

    const callbackIntersection = () => {
        getNextIssues();
    };

    const ref = useIntersection<HTMLDivElement>({
        callbackIntersection,
    });

    useEffect(() => {
        isInitialFetch && getIssues(1);
    }, []);

    return (
        <>
            <ul>
                {data &&
                    data.map((issue, idx) => (
                        <IssueList index={idx} {...issue} key={issue.node_id} />
                    ))}
            </ul>
            {isLoading && <Spinner />}
            {hasNext && <div ref={ref} style={{height: 50}}></div>}
        </>
    );
};
export default ListContainer;

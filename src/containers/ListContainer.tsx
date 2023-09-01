import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {issuesState} from '../atom';
import useGetIssues from '../hooks/useGetIssues';
import {useIntersection} from '../hooks/useIntersection';
import IssueList from '../components/issues/IssueList';
import Spinner from '../components/Spinner';
import ErrorDisplay from '../components/ErrorDisplay';

const ListContainer = () => {
    const {data, isLoading, hasNext, error} = useRecoilValue(issuesState);
    const isInitialFetch = !data || data.length < 1;

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
            {error ? (
                <ErrorDisplay
                    status={error.response!.status}
                    statusText={error.response!.statusText}
                    message={error.message}
                ></ErrorDisplay>
            ) : (
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
            )}
        </>
    );
};
export default ListContainer;

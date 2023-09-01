import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {issuesState} from '../atom';
import useGetIssues from '../hooks/useGetIssues';
import {useIntersection} from '../hooks/useIntersection';
import {IntersectionHandler} from '../types/intersection';
import IssueList from '../components/issues/IssueList';
import Spinner from '../components/Spinner';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingScreen from '../components/LoadingScreen';

const ListContainer = () => {
    const {data, isLoading, hasNext, error} = useRecoilValue(issuesState);
    const isInitialFetch = !data || data.length < 1;

    const {getIssues, getNextIssues} = useGetIssues();

    const callbackIntersection: IntersectionHandler = ([entry], observer) => {
        const {isIntersecting, target} = entry;
        if (isIntersecting) {
            observer.unobserve(target);
            getNextIssues();
        }
    };

    const ref = useIntersection<HTMLDivElement>({
        callbackIntersection,
    });

    useEffect(() => {
        isInitialFetch && getIssues(1);
    }, []);

    return (
        <>
            {isInitialFetch && isLoading && <LoadingScreen />}
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
                    {!isInitialFetch && isLoading && <Spinner />}
                    {hasNext && <div ref={ref} style={{height: 50}}></div>}
                </>
            )}
        </>
    );
};
export default ListContainer;

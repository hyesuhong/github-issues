import {useEffect} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {beforeItemState, issueDetailState, issuesState} from '../atom';
import useGetIssueDetail from '../hooks/useGetIssueDetail';
import IssueBody from '../components/issues/IssueBody';
import Info from '../components/issues/Info';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingScreen from '../components/LoadingScreen';

interface Props {
    issueNumber: number;
}

const ContentContainer = ({issueNumber}: Props) => {
    const {data: issuesListData} = useRecoilValue(issuesState);
    const [{data, isLoading, error}, setIssueDetail] = useRecoilState(issueDetailState);
    const setBeforeItemState = useSetRecoilState(beforeItemState);

    const basicIssue = issuesListData
        ? issuesListData.find(issue => issue.number === issueNumber)
        : undefined;

    const issue = data ? data : basicIssue;

    const {getIssue} = useGetIssueDetail();

    useEffect(() => {
        getIssue(issueNumber);
    }, [issueNumber]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setBeforeItemState(issueNumber);

        return () => {
            setIssueDetail({isLoading: false, data: undefined, error: undefined});
        };
    }, []);

    return (
        <>
            {isLoading && <LoadingScreen />}
            {error ? (
                <ErrorDisplay
                    status={error.response?.status}
                    statusText={error.response?.statusText}
                    message={error.message}
                />
            ) : (
                <>
                    {issue && (
                        <>
                            <Info
                                useProfile={true}
                                user={{login: issue.user.login, avatar_url: issue.user.avatar_url}}
                                title={issue.title}
                                created_at={issue.created_at}
                                comments={issue.comments}
                                issueNumber={issueNumber}
                            />
                            <IssueBody body={issue.body} />
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default ContentContainer;

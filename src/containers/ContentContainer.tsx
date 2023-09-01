import {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {beforeItemState, issuesState} from '../atom';
import {instance} from '../apis/axios';
import {TARGET_GITHUB} from '../constants/github';
import IssueBody from '../components/issues/IssueBody';
import Info from '../components/issues/Info';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingScreen from '../components/LoadingScreen';
import useAxios from '../hooks/useAxios';
import {githubIssue} from '../types/github';

interface Props {
    issueNumber: number;
}

const ContentContainer = ({issueNumber}: Props) => {
    const {data} = useRecoilValue(issuesState);
    const setBeforeItemState = useSetRecoilState(beforeItemState);

    const {response, error, loading} = useAxios<githubIssue>({
        options: {url: `/repos/${TARGET_GITHUB.OWNER}/${TARGET_GITHUB.REPO}/issues/${issueNumber}`},
        axiosInstance: instance,
    });

    const basicIssue = data ? data.find(issue => issue.number === issueNumber) : undefined;

    const issue = response ? response.data : basicIssue;

    useEffect(() => {
        window.scrollTo(0, 0);
        setBeforeItemState(issueNumber);
    }, [issueNumber, setBeforeItemState]);

    return (
        <>
            {loading && <LoadingScreen />}
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

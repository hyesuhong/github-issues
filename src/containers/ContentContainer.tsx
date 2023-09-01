import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {AxiosError} from 'axios';
import {beforeItemState, issuesState} from '../atom';
import {getIssueContent} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';
import {githubIssue} from '../types/github';
import IssueBody from '../components/issues/IssueBody';
import Info from '../components/issues/Info';
import ErrorDisplay from '../components/ErrorDisplay';
import Spinner from '../components/Spinner';

interface Props {
    issueNumber: number;
}

const ContentContainer = ({issueNumber}: Props) => {
    const {data} = useRecoilValue(issuesState);
    const setBeforeItemState = useSetRecoilState(beforeItemState);
    const basicIssue = data ? data.find(issue => issue.number === issueNumber) : undefined;

    const [issue, setIssue] = useState<githubIssue | undefined>(basicIssue);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<AxiosError>();

    useEffect(() => {
        getIssueContent({
            owner: TARGET_GITHUB.OWNER,
            repo: TARGET_GITHUB.REPO,
            issue_number: issueNumber,
        })
            .then(res => {
                if (res.status === 200) {
                    setIssue(res.data);
                    setError(undefined);
                }
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [issueNumber]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setBeforeItemState(issueNumber);
    }, []);

    return (
        <>
            {error && (
                <ErrorDisplay
                    status={error.response!.status}
                    statusText={error.response!.statusText}
                    message={error.message}
                ></ErrorDisplay>
            )}
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
            {isLoading && <Spinner />}
        </>
    );
};

export default ContentContainer;

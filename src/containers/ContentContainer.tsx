import IssueBody from '../components/issues/IssueBody';
import Info from '../components/issues/Info';
import {githubIssue} from '../types/github';
import {useRecoilValue} from 'recoil';
import {issuesState} from '../atom';
import {useEffect, useState} from 'react';
import {getIssueContent} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';

interface Props {
    issueNumber: number;
}

const ContentContainer = ({issueNumber}: Props) => {
    const {data} = useRecoilValue(issuesState);
    const basicIssue = data.find(issue => issue.number === issueNumber);

    const [issue, setIssue] = useState<githubIssue | undefined>(basicIssue);

    useEffect(() => {
        getIssueContent({
            owner: TARGET_GITHUB.OWNER,
            repo: TARGET_GITHUB.REPO,
            issue_number: issueNumber,
        })
            .then(res => {
                if (res.status === 200) {
                    setIssue(res.data);
                }
            })
            .catch(console.error);
    }, [issueNumber]);

    return (
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
    );
};

export default ContentContainer;

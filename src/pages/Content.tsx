import {redirect, useParams} from 'react-router-dom';
import ContentContainer from '../containers/ContentContainer';
import {useEffect, useState} from 'react';
import {getIssueContent} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';
import {githubIssue} from '../types/github';

const Content = () => {
    const {issue_number} = useParams();
    const [issue, setIssue] = useState<githubIssue>();

    useEffect(() => {
        if (typeof issue_number === 'undefined') {
            redirect('/');
        }

        getIssueContent({
            owner: TARGET_GITHUB.OWNER,
            repo: TARGET_GITHUB.REPO,
            issue_number: Number(issue_number),
        })
            .then(({data}) => setIssue(data))
            .catch(console.error);
    }, [issue_number]);

    return <>{issue && <ContentContainer {...issue} />}</>;
};

export default Content;

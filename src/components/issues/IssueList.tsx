import {Link} from 'react-router-dom';
import {githubIssue} from '../../types/github';
import Info from './Info';
import AdCell from './AdCell';

interface Props extends githubIssue {
    index: number;
}

const IssueList = ({index, number, user, title, created_at, comments}: Props) => {
    const issueProps = {
        user: {login: user.login, avatar_url: user.avatar_url},
        title,
        created_at,
        comments,
        issueNumber: number,
    };

    return (
        <>
            <li>
                <Link to={`/issues/${number}`}>
                    <Info {...issueProps} />
                </Link>
            </li>
            {(index + 1) % 4 === 0 && (
                <li>
                    <AdCell />
                </li>
            )}
        </>
    );
};

export default IssueList;

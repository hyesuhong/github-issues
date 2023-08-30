import {Link} from 'react-router-dom';
import {githubIssue} from '../../types/github';
import Info from './Info';
import AdCell from './AdCell';

interface Props extends githubIssue {
    index: number;
}

const IssueList = ({index, ...props}: Props) => {
    return (
        <>
            <li>
                <Link to={`/issues/${props.number}`}>
                    <Info {...props} />
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

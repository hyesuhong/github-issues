import {githubIssue} from '../../types/github';
import Info from './Info';

interface Props extends githubIssue {
    index: number;
}

const IssueList = ({index, ...props}: Props) => {
    return (
        <>
            <li>
                <Info {...props} />
            </li>
            {(index + 1) % 4 === 0 && (
                <li>
                    <h1>ad item</h1>
                </li>
            )}
        </>
    );
};

export default IssueList;

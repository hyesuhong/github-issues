import IssueList from '../components/issues/IssueList';
import {githubIssue} from '../types/github';

interface Props {
    data?: githubIssue[];
}

const ListContainer = ({data}: Props) => {
    return (
        <ul>
            {data &&
                data.map((issue, idx) => <IssueList index={idx} {...issue} key={issue.node_id} />)}
        </ul>
    );
};
export default ListContainer;

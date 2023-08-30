import {RefObject} from 'react';
import IssueList from '../components/issues/IssueList';
import {githubIssue} from '../types/github';

interface Props {
    intersectionRef: RefObject<HTMLUListElement>;
    data?: githubIssue[];
}

const ListContainer = ({data, intersectionRef}: Props) => {
    return (
        <ul ref={intersectionRef}>
            {data &&
                data.map((issue, idx) => <IssueList index={idx} {...issue} key={issue.node_id} />)}
        </ul>
    );
};
export default ListContainer;

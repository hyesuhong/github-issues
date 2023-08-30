import {RefObject} from 'react';
import IssueList from '../components/issues/IssueList';
import {githubIssue} from '../types/github';

interface Props {
    intersectionRef: RefObject<HTMLDivElement>;
    data?: githubIssue[];
}

const ListContainer = ({data, intersectionRef}: Props) => {
    return (
        <>
            <ul>
                {data &&
                    data.map((issue, idx) => (
                        <IssueList index={idx} {...issue} key={issue.node_id} />
                    ))}
            </ul>
            <div ref={intersectionRef} style={{height: 8}}></div>
        </>
    );
};
export default ListContainer;

import {RefObject} from 'react';
import IssueList from '../components/issues/IssueList';
import {useRecoilValue} from 'recoil';
import {issuesState} from '../atom';

interface Props {
    intersectionRef: RefObject<HTMLDivElement>;
}

const ListContainer = ({intersectionRef}: Props) => {
    const {data} = useRecoilValue(issuesState);

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

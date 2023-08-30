import {useEffect, useState} from 'react';
import ListContainer from '../containers/ListContainer';
import {getIssuesList} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';

const List = () => {
    const [issues, setIssues] = useState();
    useEffect(() => {
        getIssuesList({owner: TARGET_GITHUB.OWNER, repo: TARGET_GITHUB.REPO})
            .then(res => {
                // console.info(res);
                setIssues(res.data);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <ListContainer data={issues} />
        </>
    );
};

export default List;

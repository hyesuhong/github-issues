import {useParams} from 'react-router-dom';
import ContentContainer from '../containers/ContentContainer';

const Content = () => {
    const {issue_number} = useParams();

    return (
        <>
            <ContentContainer issueNumber={Number(issue_number)} />
        </>
    );
};

export default Content;

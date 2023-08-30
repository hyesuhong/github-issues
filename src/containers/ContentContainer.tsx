import ContentBody from '../components/issues/ContentBody';
import Info from '../components/issues/Info';
import {githubIssue} from '../types/github';

const ContentContainer = ({...props}: githubIssue) => {
    return (
        <>
            <Info useProfile={true} {...props} />
            <ContentBody body={props.body} />
        </>
    );
};

export default ContentContainer;

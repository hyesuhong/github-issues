import IssueBody from '../components/issues/IssueBody';
import Info from '../components/issues/Info';
import {githubIssue} from '../types/github';

const ContentContainer = ({...props}: githubIssue) => {
    return (
        <>
            <Info useProfile={true} {...props} />
            <IssueBody body={props.body} />
        </>
    );
};

export default ContentContainer;

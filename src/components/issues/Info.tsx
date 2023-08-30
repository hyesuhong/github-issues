import {githubIssue} from '../../types/github';

const Info = ({user, title, created_at, comments, number}: githubIssue) => {
    return (
        <>
            <div>
                title: {title}
                <br />
                name: {user.login}
                <br />
                comments: {comments}
                <br />
                created_at: {created_at}
                <br />
                number: {number}
            </div>
        </>
    );
};

export default Info;

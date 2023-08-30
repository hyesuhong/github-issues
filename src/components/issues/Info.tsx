import {githubIssue} from '../../types/github';

interface Props extends githubIssue {
    useProfile?: boolean;
}

const Info = ({useProfile = false, user, title, created_at, comments, number}: Props) => {
    return (
        <>
            <div>
                {useProfile && <img src={user.avatar_url} alt={user.login} />}
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

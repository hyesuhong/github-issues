import {githubIssue} from '../../types/github';
import * as S from '../../styles/IssuesInfo.styled';
import {changeDateFormat} from '../../utils/date';

interface Props extends githubIssue {
    useProfile?: boolean;
}

const Info = ({useProfile = false, user, title, created_at, comments, number}: Props) => {
    return (
        <>
            <S.InfoWrapper>
                {useProfile && (
                    <S.InfoProfile>
                        <img src={user.avatar_url} alt={user.login} />
                    </S.InfoProfile>
                )}
                <S.InfoTextArea>
                    <p className='id-title'>
                        <span className='issue_num'>#{number} </span>
                        <span className='title'>{title}</span>
                    </p>
                    <p className='create'>
                        작성자: {user.login} | 작성일: {changeDateFormat(created_at)}
                    </p>
                    <p className='comments'>코멘트: {comments}</p>
                </S.InfoTextArea>
            </S.InfoWrapper>
        </>
    );
};

export default Info;

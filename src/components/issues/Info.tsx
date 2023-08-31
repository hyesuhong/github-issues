import * as S from '../../styles/IssuesInfo.styled';
import {changeDateFormat} from '../../utils/date';
import {InfoProps} from '../../types/IssueInfo';

const Info = ({useProfile = false, user, title, created_at, comments, issueNumber}: InfoProps) => {
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
                        <span className='issue_num'>#{issueNumber} </span>
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

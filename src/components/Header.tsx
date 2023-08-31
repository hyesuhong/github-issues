import {Link} from 'react-router-dom';
import {targetGithub} from '../types/github';
import * as S from '../styles/Header.styled';

const Header = ({owner, repo}: targetGithub) => {
    return (
        <S.HeaderWrapper>
            <Link to='/'>
                {owner}/{repo}
            </Link>
        </S.HeaderWrapper>
    );
};

export default Header;

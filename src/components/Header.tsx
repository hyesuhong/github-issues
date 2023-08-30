import {Link} from 'react-router-dom';
import {targetGithub} from '../types/github';
import * as S from '../styles/Header.style';

const Header = ({owner, repo}: targetGithub) => {
    return (
        <S.HeaderWrapper>
            <h1>
                <Link to='/'>
                    {owner}/{repo}
                </Link>
            </h1>
        </S.HeaderWrapper>
    );
};

export default Header;

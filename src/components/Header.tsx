import {targetGithub} from '../types/github';

const Header = ({owner, repo}: targetGithub) => {
    return (
        <header>
            {owner}/{repo}
        </header>
    );
};

export default Header;

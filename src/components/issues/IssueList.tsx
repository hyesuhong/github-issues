import {IMAGE_URL, LINK_URL} from '../../constants/advertisement';
import {githubIssue} from '../../types/github';
import Info from './Info';

interface Props extends githubIssue {
    index: number;
}

const IssueList = ({index, ...props}: Props) => {
    return (
        <>
            <li>
                <Info {...props} />
            </li>
            {(index + 1) % 4 === 0 && (
                <li>
                    <a href={LINK_URL} target='_blank'>
                        <img src={IMAGE_URL} alt='원티드 로고' />
                    </a>
                </li>
            )}
        </>
    );
};

export default IssueList;

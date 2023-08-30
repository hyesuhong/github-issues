import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import * as S from '../../styles/IssueBody.styled';

interface Props {
    body: string;
}

const IssueBody = ({body}: Props) => {
    return (
        <S.BodyWrapper>
            <ReactMarkdown>{body}</ReactMarkdown>
        </S.BodyWrapper>
    );
};

export default IssueBody;

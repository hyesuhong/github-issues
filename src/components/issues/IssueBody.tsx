import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import * as S from '../../styles/IssueBody.styled';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
    body: string;
}

const IssueBody = ({body}: Props) => {
    const addEmptyLineBody = body.replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n');

    return (
        <S.BodyWrapper>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                linkTarget='_blank'
                components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                language={match[1]}
                                PreTag='div'
                                {...props}
                                style={oneDark}
                            >
                                {String(children)}
                            </SyntaxHighlighter>
                        ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        );
                    },
                    img: ({src, alt, ...props}) => (
                        <S.Image src={src || ''} alt={alt || ''} {...props} />
                    ),
                    a: ({href, target, children, ...props}) => (
                        <S.Anchor href={href} target={target} {...props}>
                            {children}
                        </S.Anchor>
                    ),
                    input: ({checked}) => (
                        <S.CheckboxWrapper>
                            <input type='checkbox' disabled checked={checked} />
                        </S.CheckboxWrapper>
                    ),
                    blockquote: ({...props}) => <S.Quote {...props}></S.Quote>,
                    h1: ({children, ...props}) => (
                        <S.HeadingFirst {...props}>{children}</S.HeadingFirst>
                    ),
                    h2: ({children, ...props}) => (
                        <S.HeadingSecond {...props}>{children}</S.HeadingSecond>
                    ),
                    h3: ({children, ...props}) => (
                        <S.HeadingThird {...props}>{children}</S.HeadingThird>
                    ),
                }}
            >
                {addEmptyLineBody}
            </ReactMarkdown>
        </S.BodyWrapper>
    );
};

export default IssueBody;

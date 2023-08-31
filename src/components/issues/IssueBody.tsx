import {PluggableList, ReactMarkdown} from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as S from '../../styles/IssueBody.styled';

interface Props {
    body: string;
}

const IssueBody = ({body}: Props) => {
    const addEmptyLineBody = body.replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n');

    return (
        <S.BodyWrapper>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw] as PluggableList}
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
                            <code className={className}>{children}</code>
                        );
                    },
                    img: ({src, alt}) => <S.Image src={src || ''} alt={alt || ''} />,
                    a: ({href, target, children}) => (
                        <S.Anchor href={href} target={target}>
                            {children}
                        </S.Anchor>
                    ),
                    input: ({checked}) => (
                        <S.CheckboxWrapper>
                            <input type='checkbox' disabled checked={checked} />
                        </S.CheckboxWrapper>
                    ),
                    blockquote: ({children}) => <S.Quote>{children}</S.Quote>,
                    h1: ({children}) => <S.HeadingFirst>{children}</S.HeadingFirst>,
                    h2: ({children}) => <S.HeadingSecond>{children}</S.HeadingSecond>,
                    h3: ({children}) => <S.HeadingThird>{children}</S.HeadingThird>,
                }}
            >
                {addEmptyLineBody}
            </ReactMarkdown>
        </S.BodyWrapper>
    );
};

export default IssueBody;

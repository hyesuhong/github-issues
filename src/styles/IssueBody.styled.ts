import {styled} from 'styled-components';

export const BodyWrapper = styled.section`
    margin: 32px 0;
    overflow-wrap: break-word;

    p {
        font-size: 14px;
        line-height: 142%;
        margin: 1em 0;
    }

    code {
        font-size: 14px;

        background: rgba(83, 86, 93, 1);
        padding: 1px 2px;
        border-radius: 2px;
    }

    ul,
    ol {
        margin: 1em 0;
        padding-inline-start: 1em;

        &:has(input[type='checkbox']) {
            margin: 0.3em 0;
        }

        li {
            list-style: inherit;
            line-height: 142%;

            &:has(input[type='checkbox']) {
                position: relative;
                list-style: none;
                line-height: 162%;
            }
        }
    }
`;

const HeadingsMargin = styled.h1`
    margin: 0.83em 0;
`;

export const HeadingFirst = styled(HeadingsMargin)`
    font-size: 26px;
    font-weight: 700;
    line-height: 123%;
`;

export const HeadingSecond = styled(HeadingsMargin)`
    font-size: 22px;
    font-weight: 500;
    line-height: 145%;
`;

export const HeadingThird = styled(HeadingsMargin)`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
`;

export const Anchor = styled.a`
    color: ${props => props.theme.blue};
`;

export const CheckboxWrapper = styled.span`
    position: absolute;
    top: 0;
    left: -1em;
`;

export const Quote = styled.blockquote`
    border-left: 3px solid ${props => props.theme.darkGrey};
    padding: 0 1.6em;
    color: ${props => props.theme.darkGrey};
`;

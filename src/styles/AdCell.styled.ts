import {styled} from 'styled-components';

export const AdWrapper = styled.div`
    position: relative;
    margin: 16px 0 8px;

    & a {
        display: block;
    }

    & img {
        width: 100%;
    }

    &::before {
        content: 'AD';
        position: absolute;
        top: 4px;
        right: 4px;
        background: ${props => props.theme.lightGrey};
        color: ${props => props.theme.black};
        font-size: 12px;
        padding: 2px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover::before {
        opacity: 1;
    }
`;

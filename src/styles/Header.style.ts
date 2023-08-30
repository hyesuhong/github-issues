import {styled} from 'styled-components';

export const HeaderWrapper = styled.header`
    display: grid;
    place-items: center;
    height: 56px;

    position: sticky;
    top: 0;

    background: ${props => props.theme.black};
    border-bottom: 1px solid rgba(219, 220, 222, 0.6);

    & h1 {
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 145%; /* 31.9px */
    }
`;

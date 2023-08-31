import {styled} from 'styled-components';

export const HeaderWrapper = styled.header`
    display: grid;
    place-items: center;
    height: 56px;

    position: sticky;
    top: 0;

    background: ${props => props.theme.black};
    border-bottom: 1px solid rgba(219, 220, 222, 0.6);

    & a {
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        transition: color 0.3s;

        &:hover {
            color: ${props => props.theme.blue};
        }
    }
`;

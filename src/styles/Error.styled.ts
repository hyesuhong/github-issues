import {styled} from 'styled-components';

export const ErrorWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 8px 24px;

    img {
        width: 30%;
    }

    h4 {
        font-size: 20px;
        font-weight: 500;
        line-height: 140%;
        margin: 24px auto 0;
    }

    h6 {
        font-size: 16px;
        font-weight: 500;
        line-height: 168%;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 142%;
        margin-top: 24px;
    }
`;

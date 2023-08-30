import {styled} from 'styled-components';

export const InfoWrapper = styled.dl`
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(219, 220, 222, 0.6);
`;

export const InfoProfile = styled.dt`
    flex: 0 0 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const InfoTextArea = styled.dd`
    flex: 1;

    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-rows: repeat(2, min-content);
    grid-template-areas: 'id-title id-title' 'create comments';
    align-items: center;
    gap: 8px;

    padding: 8px 0;

    & > p {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 133%;
    }

    & .id-title {
        grid-area: id-title;
    }

    & .issue_num {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 168%;
        color: ${props => props.theme.darkGrey};
    }

    & .title {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 142%;
    }

    & .create {
        grid-area: create;
    }
`;

import IcoSad from '../assets/images/emotion-sad-fill.png';
import * as S from '../styles/Error.styled';

interface props {
    status: number;
    statusText: string;
    message?: string;
}

const ErrorDisplay = ({status, statusText, message}: props) => {
    return (
        <>
            <S.ErrorWrapper>
                <img src={IcoSad} alt='sad face' />
                <h4>{status}</h4>
                <h6>{statusText}</h6>
                {message && <p>{message}</p>}
            </S.ErrorWrapper>
        </>
    );
};

export default ErrorDisplay;

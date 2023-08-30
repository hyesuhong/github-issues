import {Link} from 'react-router-dom';
import {LINK_URL} from '../../constants/advertisement';
import AdImage from '../../assets/images/ad_image.png';
import * as S from '../../styles/AdCell.styled';
const AdCell = () => {
    return (
        <S.AdWrapper>
            <Link to={LINK_URL} target='_blank'>
                <img src={AdImage} alt='원티드 로고' />
            </Link>
        </S.AdWrapper>
    );
};

export default AdCell;

import React from 'react';

//logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg} from './HeaderStyles';

const Header = () => (
    <Wrapper>
        <Content>
            <h1>Mirate Una Peli</h1>
        </Content>
    </Wrapper>
);


export default Header;
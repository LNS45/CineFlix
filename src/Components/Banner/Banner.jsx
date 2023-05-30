import styled from '@emotion/styled';
import BannerMovie from './BannerMovie/BannerMovie';

const Banner = () => {

    const Banner = styled.section`
        position: relative;
        width: 100%;
        height: 86vh;
        top: 5.2rem;
        font-size: 30px;
        box-sizing: border-box;
        padding: 1.25rem 1.25rem;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-image: url("https://images.hdqwalls.com/download/marvel-vs-dc-1u-1360x768.jpg");
            z-index: -1;
            filter: blur(1px);
            opacity: 0.5;
        }

        /*Adaptabilidad Movil*/
        @media screen and (max-width: 768px) {
        & {
            height: 40vh;
        }
}
    `;
    

    return <Banner className='Banner'>
        <BannerMovie /> 
    </Banner>
}

export default Banner;
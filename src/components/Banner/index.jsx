import styled from "styled-components";

const FigureStyled = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-grow: 1;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%; 
`;

const Banner = ({title, backgroundImg}) => {
    return (
        <FigureStyled $backgroundImage={backgroundImg} >
            <h1>{title}</h1>
        </FigureStyled>
    );
}

export default Banner;
import styled from "styled-components";

const FigureStyled = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
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

const TitleStyled = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  max-width: 300px;
  padding: 0 64px;
`;

const Banner = ({ title, backgroundImg }) => {
  return (
    <FigureStyled $backgroundImage={backgroundImg}>
      <TitleStyled>{title}</TitleStyled>
    </FigureStyled>
  );
};

export default Banner;

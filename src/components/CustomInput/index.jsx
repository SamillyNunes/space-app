import styled from "styled-components";
import searchImg from "../../assets/images/search.png";

const InputStyledContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const CustomInputStyled = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  &::placeholder{
    color: #d9d9d9;
    font-weight: 400;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CustomInput = (props) => {
  return (
    <InputStyledContainer>
      <CustomInputStyled placeholder="O que você procura?" {...props} />
      <SearchIcon src={searchImg} alt="Ícone de pesquisa (Lupa)" />
    </InputStyledContainer>
  );
};

export default CustomInput;

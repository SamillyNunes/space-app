import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    & > img{
        height: 15px;
    }
`;

const IconButton = ({iconPath, ...props}) => {
    return (
        <ButtonStyled {...props}>
            <img src={iconPath} alt="Botão em forma de ícone" />
        </ButtonStyled>
    );
}

export default IconButton;
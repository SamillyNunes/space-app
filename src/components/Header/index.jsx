import styled from "styled-components";
import CustomInput from "../CustomInput";

const StyledHeader = styled.header`
    padding: 60px;
    display: flex;
    justify-content: space-between;

    img{
        max-width: 212px;
    }
`;

const Header = ({onInputValueChanged}) => {
    return (
        <StyledHeader>
            <img src="/images/logo.png" alt="Logo da aplicação" />

            <CustomInput onChange={onInputValueChanged} />
        </StyledHeader>
    );
}

export default Header;
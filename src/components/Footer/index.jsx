import styled from "styled-components";

const FooterStyled = styled.footer`
    background-color: #04244F;
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    color: #fff;

    & > div{
        display: flex;
        width: 20%;
        gap: 2rem;

        img{
            height: 1.15rem;
        }
    }

    h5{
        font-weight: 400;
    }
    
`;

const Footer = () => {
    return (
        <FooterStyled>
            <div>
                <img src="/images/social/facebook.svg" alt="Ícone do Facebook" />
                <img src="/images/social/instagram.svg" alt="Ícone do Instagram" />
                <img src="/images/social/twitter.svg" alt="Ícone do Twitter" />
            </div>
            <h5>Desenvolvido com Alura.</h5>
        </FooterStyled>
    );
}

export default Footer;
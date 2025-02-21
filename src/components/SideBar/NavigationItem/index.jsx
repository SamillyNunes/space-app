import styled from "styled-components";

const NavigationItemStyled = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$enabled ? '#7b78e5' : '#d9d9d9'};
    font-family: ${ props => props.$enabled ? 'GhandiSansBold' : 'GhandiSansRegular'};    
    display: flex;
    align-items: center;
    gap: 22px;
`;

const NavigationItem = ({
  children,
  activeIcon,
  inactiveIcon,
  enabled = false,
}) => {
  return (
    <NavigationItemStyled $enabled={enabled}>
      <img src={enabled ? activeIcon : inactiveIcon} alt="Ícone de navegação" />
      {children}
    </NavigationItemStyled>
  );
};

export default NavigationItem;
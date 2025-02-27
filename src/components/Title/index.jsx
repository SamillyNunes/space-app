import styled from "styled-components";

const Title = styled.h2`
    color: #7B78E6;
    font-size: 28px;
    font-weight: 400;
    text-align: ${(props) => (props.$alignment ? props.$alignment : 'left')};

`;

export default Title;
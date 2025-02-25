import styled from "styled-components";
import tags from "../../../assets/json/tags.json";

const LabelStyled = styled.p`
  font-size: 24px;
  color: #d9d9d9;
  margin: 0;
`;

const TagStyled = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  color: #fff;
  font-size: 24px;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 10px;
  box-sizing: border-box;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;

  &:hover {
    border-color: #c98cf1;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 3rem;
`;

const TagsList = styled.div`
    display: flex;
    gap: 1rem;
`;

const Tags = () => {
  return (
    <TagsContainer>
      <LabelStyled>Busque por tags:</LabelStyled>
      <TagsList>
        {tags.map((tag) => (
          <TagStyled key={tag.id}>{tag.titulo} </TagStyled>
        ))}
      </TagsList>
    </TagsContainer>
  );
};

export default Tags;

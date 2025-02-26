import Title from "../../Title";
import popularPhotos from "../../../assets/json/fotos-populares.json";
import styled from "styled-components";

const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > img {
    border-radius: 10px;
    width: 12.5rem;
    max-width: 212px;
    height: 9.5rem;
    box-sizing: border-box;
    object-fit: cover;
  }
`;

const Popular = () => {
  return (
    <PhotosContainer>
      <Title $alignment="center">Populares</Title>
      {popularPhotos.map((p) => (
        <img src={p.path} />
      ))}
    </PhotosContainer>
  );
};

export default Popular;

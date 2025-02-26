import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";

const GalleryContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const FluidSection = styled.section`
  flex-grow: 1;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 0;
  }
`;

const Gallery = ({ photos = [], onPhotoSelected, onSetFavorite }) => {
  return (
    <>
      <Tags />

      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <div>
            {photos.map((p) => (
              <Image
                key={p.id}
                photo={p}
                onExpanded={onPhotoSelected}
                onFavorite={onSetFavorite}
              />
            ))}
          </div>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;

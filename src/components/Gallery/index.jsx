import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.15rem;
    row-gap: 0;
  }
`;

const Gallery = ({ photos = [] }) => {
  return (
    <>
      <Tags />

      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <div>
            {photos.map((p) => (
              <Image key={p.id} photo={p} />
            ))}
          </div>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;

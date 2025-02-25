import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";

const GalleryContainer = styled.div`
    display: flex;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const Gallery = () => {
    return (
        <>
            <Tags />

            <GalleryContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                </FluidSection>
                <Popular/>
            </GalleryContainer>
        </>
    );
}

export default Gallery;
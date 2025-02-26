import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

import photos from "./assets/json/fotos.json";
import { useEffect, useState } from "react";
import ZoomModal from "./components/ZoomModal";
import Footer from "./components/Footer";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedTag, setSelectedTag] = useState(0);
  const [filter, setFilter] = useState("");

  const onChangeFavoritePhoto = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }

    setGalleryPhotos(
      galleryPhotos.map((p) => {
        return {
          ...p,
          favorite: p.id === photo.id ? !photo.favorite : p.favorite,
        };
      })
    );
  };

  const onChangeSelectedTag = (tagId) => {
    setSelectedTag(tagId);
  };

  useEffect(()=>{
    const filteredImgs = photos.filter(p => {
      const tagFilter = !selectedTag || selectedTag===p.tagId;
      const textFilter = !filter || p.titulo.toLowerCase().includes(filter.toLowerCase());
      return tagFilter && textFilter;
    });

    setGalleryPhotos(filteredImgs);

  }, [filter, selectedTag]);

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header onInputValueChanged={(e) => setFilter(e.target.value)} />
        <MainContainer>
          <SideBar />

          <ContentContainer>
            <Banner
              title="A galeria mais completa de fotos do espaço!"
              backgroundImg={"/images/earth.png"}
            />

            <Gallery
              photos={galleryPhotos}
              onPhotoSelected={(photo) => setSelectedPhoto(photo)}
              onSetFavorite={onChangeFavoritePhoto}
              selectedTag={selectedTag}
              onSelectTag={onChangeSelectedTag}
            />
          </ContentContainer>
        </MainContainer>
        <Footer />
      </AppContainer>
      <ZoomModal
        photo={selectedPhoto}
        onCloseModal={() => setSelectedPhoto(null)}
        setPhotoAsFavorite={onChangeFavoritePhoto}
      />
    </GradientBackground>
  );
};

export default App;

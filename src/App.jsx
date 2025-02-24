import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";

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

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <main style={{ display: "flex" }}>
        <SideBar />

        <Banner
          title="A galeria mais completa de fotos do espaço!"
          backgroundImg={'/images/earth.png'}
        />
      </main>
    </GradientBackground>
  );
}

export default App;

import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

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
  return <GradientBackground>
    <GlobalStyles></GlobalStyles>
  </GradientBackground>;
}

export default App;

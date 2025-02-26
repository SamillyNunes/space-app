import styled from "styled-components";

const ImageFigureStyled = styled.figure`
  width: ${(props) => (props.$expanded ? "90%" : "448px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 336px;

  & > img {
    max-width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: #fff;
    box-sizing: border-box;
    padding: 15px 20px;

    h3 {
      font-family: "GhandiSansBold";
      font-size: 16px;
    }

    p {
      flex-grow: 1;
      font-size: 14px;
    }

    h3,
    p {
      margin: 0;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        gap: 10px;
        align-items: center;

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;

const Image = ({ photo, expanded = false, onExpanded }) => {
  return (
    <ImageFigureStyled $expanded={expanded}>
      <img src={photo.path} alt={photo.titulo} />
      <figcaption>
        <h3> {photo.titulo} </h3>
        <footer>
          <p> {photo.fonte} </p>
          <div>
            <button>
              <img src="/icons/favorito-ativo.png" alt="Botão de favorito" />
            </button>
            <button onClick={() => onExpanded(photo)}>
              <img src="/icons/expandir.png" alt="Botão de expandir" />
            </button>
          </div>
        </footer>
      </figcaption>
    </ImageFigureStyled>
  );
};

export default Image;

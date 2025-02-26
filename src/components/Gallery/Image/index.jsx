import styled from "styled-components";
import IconButton from "../../IconButton";

const ImageFigureStyled = styled.figure`
  width: ${(props) => (props.$expanded ? "100%" : "400px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$expanded ? "100%" : "336px")};

  & > img {
    max-width: 100%;
    height: ${(props) => (props.$expanded ? "100%" : "70%")};;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0 0 10px 10px;
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
      }
    }
  }
`;

const Image = ({ photo, expanded = false, onExpanded, onFavorite }) => {
  const favoriteIcon = photo.favorite ? "/icons/favorito-ativo.png" : "/icons/favorito.png";

  return (
    <ImageFigureStyled $expanded={expanded}>
      <img src={photo.path} alt={photo.titulo} />
      <figcaption>
        <h3> {photo.titulo} </h3>
        <footer>
          <p> {photo.fonte} </p>
          <div>
            <IconButton
              iconPath={favoriteIcon}
              onClick={()=> onFavorite(photo)}
            />
            {!expanded && (
              <IconButton
                aria-hidden={expanded}
                onClick={() => onExpanded(photo)}
                iconPath="/icons/expandir.png"
              />
            )}
          </div>
        </footer>
      </figcaption>
    </ImageFigureStyled>
  );
};

export default Image;

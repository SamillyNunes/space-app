import styled from "styled-components";
import Image from "../Gallery/Image";
import IconButton from "../IconButton";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Dialog = styled.dialog`
  position: absolute;
  top: 15%;
  right: 0;
  left: 0;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;

  width: 70%;
  height: 60%;

  & > button{
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

const ZoomModal = ({ photo, onCloseModal, setPhotoAsFavorite }) => {
  return (
    <>
      {photo && (
        // esse !! vai dizer que, se eu nao tenho uma foto selecionada, o open=false, e vice-versa
        <>
          <Overlay>
            <Dialog open={!!photo}>
              <Image photo={photo} expanded={true} onFavorite={setPhotoAsFavorite} />

              <IconButton
                iconPath='/icons/fechar.png'
                onClick={onCloseModal}
                
              />
            </Dialog>
          </Overlay>
        </>
      )}
    </>
  );
};

export default ZoomModal;

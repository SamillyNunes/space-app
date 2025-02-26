import styled from "styled-components";
import Image from "../Gallery/Image";

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
  background-color: transparent;
  border: none;
`;

const ZoomModal = ({ photo }) => {
  return (
    <>
      {photo && (
        // esse !! vai dizer que, se eu nao tenho uma foto selecionada, o open=false, e vice-versa
        <>
          <Overlay>
            <Dialog open={!!photo}>
              <Image photo={photo} expanded={true} />

              <form method="dialog">
                <button>OK</button>
              </form>
            </Dialog>
          </Overlay>
        </>
      )}
    </>
  );
};

export default ZoomModal;

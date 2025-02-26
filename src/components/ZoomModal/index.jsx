const ZoomModal = ({ photo }) => {
    return (
        // esse !! vai dizer que, se eu nao tenho uma foto selecionada, o open=false, e vice-versa
        <dialog open={!!photo}>
            <h1>Olá!</h1>

            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    );
}

export default ZoomModal;
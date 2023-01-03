import ReactDOM from "react-dom";

import styled from "styled-components";
import Backdrop from "../Backdrop";
import ModalOverlay from "../ModalOverlay";

const Container = styled.div`
    
`;

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Container>
      {ReactDOM.createPortal(<Backdrop  onCloseCart={props.onCloseCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Container>
  );
};

export default Modal;

import styled, {keyframes} from "styled-components";

const Modalappear = keyframes`
0% {
    opacity: 0;
    transform: translateY(-3rem);
}

100% {
    opacity: 1;
    transform: translateY(3rem);
`;

const ModalContainer = styled.div`
position: fixed;
top: 20vh;
left: 15%;
width: 70%;
background-color: white;
padding: 1rem;
border-radius: 14px;
z-index: 20;
animation: ${Modalappear} 1s ease-out forwards;
`;

const Content = styled.div``;

const ModalOverlay = (props) => {
  return (
    <ModalContainer>
        <Content>{props.children}</Content>
    </ModalContainer>
  )
}

export default ModalOverlay
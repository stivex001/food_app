import styled from "styled-components"

const Container = styled.div`
padding: 1rem;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
border-radius: 14px;
background-color: white;
margin-top: 4rem;
`;

const Card = (props) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default Card
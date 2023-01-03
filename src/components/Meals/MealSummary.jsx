import styled from "styled-components"

const Container = styled.section`
background-color: #3f3f3f;
border: 1px solid #3f3f3f;
border-radius: 4px;
box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
text-align: center;
padding: 1rem;
margin: auto;
max-width: 45rem;
width: 90%;
margin-top: -10rem;
position: relative;
color: white;
`;

const H2 = styled.h2`
    font-size: 2rem;
    margin-top: 0
`;

const Text = styled.p`
    
`;

const MealSummary = () => {
  return (
    <Container>
        <H2>Delicious Food, Delivered To You</H2>
        <Text>
            Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
        </Text>
        <Text>
            All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs
        </Text>
    </Container>
  )
}

export default MealSummary
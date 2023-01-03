import styled from "styled-components"
import MealItemForm from "./MealItemForm";

const Container = styled.li`
display: flex;
justify-content: space-between;
margin: 1rem;
padding-bottom: 1rem;
border-bottom: 1px solid #ccc;
`;

const MealText = styled.h3`
margin: 0 0 0.25rem 0;
`

const Desc = styled.p`
font-style: italic;
`;

const Price = styled.p`
margin-top: 0.25rem;
color: #b94517;
`

const MealItems = (props) => {

    const price = `#${props.price.toFixed(2)}`
  return (
    <Container>
        <div>
            <MealText>{props.name}</MealText>
            <Desc>{props.description}</Desc>
            <Price>{price}</Price>
        </div>
        <div>
            <MealItemForm />
        </div>
    </Container>
  )
}

export default MealItems
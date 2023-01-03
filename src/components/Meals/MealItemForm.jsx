import styled from "styled-components"
import InputForm from "../UI/InputForm";

const Container = styled.form`
text-align: right;
`;

const Button = styled.button`
font: inherit;
cursor: pointer;
background-color: #8a2b06;
border: 1px solid #8a2b06;
color: white;
padding: 0.25rem 2rem;
border-radius: 20px;
font-weight: bold;

&:hover, &:active {
    background-color: #641e03;
}
`;

const MealItemForm = () => {
  return (
    <Container>
        <InputForm label='Amount' input={{
            id: 'amount',
            type: Number,
            min: '1',
            max: '5',
            step: 1,
            defaultValue: '1'
        }} />
        <Button>+ Add</Button>
    </Container>
  )
}

export default MealItemForm
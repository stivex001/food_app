import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.5rem;
`;

const Label = styled.label`
font-weight: bold;
margin-right: 1rem;
`;

const Input = styled.input`
width: 3rem;
border-radius: 5px;
border: 1px solid #ccc;
font: inherit;
padding-left: 0.5rem;
`;

const InputForm = (props) => {
  return (
    <Container>
        <Label htmlFor={props.input.id}>{props.label}</Label>
        <Input {...props.input} />
    </Container>
  )
}

export default InputForm
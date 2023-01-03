import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"


const Container = styled.button`
    background-color: #4d1601;
    font: inherit;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.75rem 3rem;
    border: none;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    font-weight: bold;

    &:hover, &:active {
        background-color: #2c0d00;
    }
`;

const CartText = styled.span`
// margin-right: 10px; 
`;

const CartNumber = styled.span`
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
`;

const HeaderButton = ({onShowCart}) => {
  return (
    <Container onClick={onShowCart}>
        <ShoppingCartOutlined style={{width: '1.35rem', height: '1.35rem', marginRight: '0.5rem'}} />
        <CartText>Your Cart</CartText>
        <CartNumber>3</CartNumber>
    </Container>
  )
}

export default HeaderButton
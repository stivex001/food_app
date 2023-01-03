import styled from "styled-components";
import Modal from "../UI/Modal";

// const Container = styled.div``;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const ListItem = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "#8a2b06" : "white"};
  color: ${(props) => (props.type === "filled" ? "white" : "#8a2b06")};
  border: 1px solid #8a2b06;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  margin-right: 0.5rem;

  &:hover,
  &:active {
    background-color: ${(props) =>
      props.type === "filled" ? "#641e03" : "gray"};
  }
`;


const Cart = ({onCloseCart}) => {
  const cartItems = (
    <ListItem>
      {[{ id: "1", name: "chinchin", amount: "2", price: 500 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ListItem>
  );
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>30</span>
      </Total>
      <ButtonContainer backgroundColor>
        <Button onClick={onCloseCart}>Close</Button>
        <Button type="filled">Order</Button>
      </ButtonContainer>
    </Modal>
  );
};

export default Cart;

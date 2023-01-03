import styled from "styled-components";
import HeaderButton from "../HeaderButton";

const Container = styled.div`
  // background-color: red;
`;

const HeaderContainer = styled.header`
background-color: #8a2b06;
color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25)
  z-index: 10;
`;

const Text = styled.h1`
  // font-size: 2rem;
`;


const ImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  margin-top: 5rem;
`;

const Image = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;

const Header = ({onShowCart}) => {
  return (
    <Container>
      <HeaderContainer>
        <Text>Simee Treats</Text>
        <HeaderButton onShowCart={onShowCart} />
      </HeaderContainer>
      <ImageContainer>
        <Image
          src="https://e7.pngegg.com/pngimages/52/689/png-clipart-birthday-cake-wedding-cake-chocolate-cake-strawberry-cream-cake-black-forest-gateau-cake-coffee-birthday-cake-wedding-cake-thumbnail.png"
          alt="Cake"
        />
      </ImageContainer>
    </Container>
  );
};

export default Header;

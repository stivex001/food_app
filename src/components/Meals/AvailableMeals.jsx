import styled, { keyframes } from "styled-components";
import Card from "../UI/Card";
import Dummy_meals from "./dummyMeals";
import MealItems from "./MealItems";

const Mealsappear = keyframes`
0% {
    opacity: 0;
    transform: translateY(3rem);
}

100% {
    opacity: 1;
    transform: translateY(-3rem);
`;

const Container = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${Mealsappear} 1s ease-out forwards;
`;

const MealList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AvailableMeals = () => {
  return (
    <Container>
      <Card>
        <MealList>
          {Dummy_meals.map((meal) => (
            <MealItems
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </MealList>
      </Card>
    </Container>
  );
};

export default AvailableMeals;

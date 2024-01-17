import styled from "styled-components";
import { categories } from "../data";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-top: 20px;
  margin-left:20px;
`;

const Categories = () => {
  return (
    <div>
      <Title>NOS CATEGORIES:</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;

import styled from "styled-components";
import { useEffect, useState } from "react";
import Product from "./Product";
import { publicRequest } from "../requestMethods";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-top: 20px;
  margin-left: 20px;
`;

const Products = ({ cat, filters, sort, title }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // s'il y a du categorie, elle retourne les produits de cette categorie sinon toutes les produits
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // filtrer les produits selon le prix, la date de creation
  useEffect(() => {
    if (sort === "new") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div style={{ marginTop: "50px" }}>
      <Title>{title}:</Title>
      <Container>
        {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item.id} />)}
      </Container>
    </div>
  );
};

export default Products;

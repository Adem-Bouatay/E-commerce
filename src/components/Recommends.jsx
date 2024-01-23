import styled from "styled-components";
import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-top: 20px;
  margin-left:20px;
`;

const Products = ({brand}) => {
  const [products, setProducts] = useState([]);
  /*const [filteredProducts, setFilteredProducts] = useState([]);*/

  // retourne les produits de cette marque (brand)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          brand
          ? `http://localhost:5000/api/products?brand=${brand}`
          : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [brand]);

  /*useEffect(() => {
    
    brand &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, brand, filters]);*/

  /*useEffect(() => {
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
  }, [sort]);*/


  return (
    <div style={{marginTop:'50px'}}>
        <Title>Recommendations:</Title>
        <Container>
        { products
            .slice(0, 4)
            .map((item) => <Product item={item} key={item.id} />)}
        </Container>
    </div>
  );
};

export default Products;
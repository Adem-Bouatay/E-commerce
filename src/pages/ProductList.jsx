import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
 
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  
`;
const Option = styled.option``;

const ProductList = () => {
  const location =useLocation();
  const cat= location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("Plus recent");

  const handleFilters= (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }
  
 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les Produits :</FilterText>
          <Select name="color" onChange={handleFilters} >
            <Option disabled >
              Couleur
            </Option>
            <Option>Blanc</Option>
            <Option>Noir</Option>
            <Option>Rouge</Option>
            <Option>Bleu</Option>
            <Option>Jaune</Option>
            <Option>Vert</Option>
          </Select>
          <Select name="size"  onChange={handleFilters}>
            <Option disabled >
              Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier les produits :</FilterText>
          <Select onChange={(e) => setSort(e.target.value) } >
            <Option value="new">Plus recent</Option>
            <Option value="asc">Prix (croissant)</Option>
            <Option value="dsc">Prix (décroissant)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort= {sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
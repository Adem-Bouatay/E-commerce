import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { categories } from "../data";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



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
  const location = useLocation();
  const navigate = useNavigate();
  const cat= location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  }

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }
  const checkLocation = () =>{
    let found = false;
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].cat === cat) {
        found = true;
        break;
      }
    }
    return found;
  }
  // Goes to the Error page if the category is not found
  useEffect(() => {
    if (!checkLocation()) {
      navigate("/404");
    }
  }, [navigate]);
 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les Produits :</FilterText>
          <Select name="brand" onChange={handleFilters} >
            <Option disabled >
              Marque
            </Option>
            <Option value="nike">NIKE</Option>
            <Option value="adidas">ADIDAS</Option>
            <Option value="puma">PUMA</Option>
            <Option value="kappa">KAPPA</Option>
            <Option value="umbro">UMBRO</Option>
            <Option value="nb">NB</Option>
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
            <Option value="newest">Plus recent</Option>
            <Option value="asc">Prix (croissant)</Option>
            <Option value="dsc">Prix (décroissant)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort= {sort}/>
      <Footer />
      <ScrollToTop />
    </Container>
  );
};

export default ProductList;
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
  font-weight : 1000;  
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 70%;
  height: 90vh;
  object-fit: cover;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
 
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "2px solid #6e6e6e" : "none")};
`;

const FilterSize = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px;
`;

const FilterButton = styled.div`
  margin-left: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;


const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch(err) {
        navigate("/404");
      }
    };
    getProduct();
  }, [id]);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (size !== "")
      dispatch(
        addProduct({ ...product, quantity, color, size })
      );
    else 
      alert("Veuillez choisir une taille");
  };
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
      <ImgContainer>
          <Image src={product.img} />
      </ImgContainer>
      <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price} TND</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/*product.color?.map((c) => (
                  <FilterColor
                    color={c}
                    key={c}
                    isSelected={color === c}
                    onClick={() => setColor(color === c ? "" : c)
              }
              />
              ))*/}
            </Filter>
            <Filter>
              <FilterTitle>Choisir la taille:</FilterTitle>
              <FilterSize class="btn-group" role="group" aria-label="Basic radio toggle button group">
                {product.size?.map((s) => (
                  <FilterButton key={s}>
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="btnradio" 
                    id={s} 
                    onChange={() => setSize(s)}
                  />
                  <label className="btn btn-outline-primary" For={s}>{s}</label>
                </FilterButton>
                ))}
              </FilterSize>
            </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
              </AmountContainer>
              <Button onClick={handleClick}>AJOUTER AU PANIER</Button>
            </AddContainer>
      </InfoContainer>
      </Wrapper>
      <Footer />
      <ScrollToTop />
    </Container>
  );
};

export default Product;
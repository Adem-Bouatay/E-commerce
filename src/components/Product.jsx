import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
  
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #eaeaea5a;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  

  const Product = ({ item }) => {
    const dispatch = useDispatch();
    let {  color, size, ...others} = item;
    size = size[0];
    const quantity = 1;
    
    // ajoute le produit au panier avec des valeurs par défaut
    const handleClick = () => {
      if (size !== "")
        dispatch(
          addProduct({ ...others, quantity, color, size })
        );
        alert("Produit ajouté au panier")
    };

    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartIcon onClick={handleClick}/>
          </Icon>
          <Icon>
            <StyledLink to={`/product/${item._id}`}>
              <SearchIcon  />
            </StyledLink>
          </Icon>
          <Icon>
            <FavoriteBorderIcon />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;
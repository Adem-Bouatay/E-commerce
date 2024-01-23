import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect } from "react";
import styled from "styled-components";
import { Badge } from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image1 from '../IMG/shirt.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { publicRequest } from "../requestMethods";

const Img = styled.img`
  height: 10%;
  width: 10%;
`;

const Logo = styled.div`
  display:flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 2px solid lightgray;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
`;

const Account = styled.div `
  margin-right: 10px;
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const disconnect = () => {
    dispatch(logout());
  }
  //faire appel à la base de données pour récupérer les produits lorsque le recherche change
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/");
        setProducts(res.data);
      } catch(err) {      
      }
    };
    getProducts();
  }, [search])
  //charger les produits cherches dans le dropdown
  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredArray = products.filter(obj => obj.title.toLowerCase().includes(search.toLowerCase()));
    const resultArray = filteredArray.map(({ title, _id }) => ({ title, _id }));
    setSearched(resultArray);
  }
  /*retourne un dropdown avec le nom de l'utilisateur et un bouton pour se déconnecter lorsque il y a un utilisateur connecté 
  sinon un bouton pour se connecter et un bouton pour s'inscrire*/
  const Login = () => {
    if(user.currentUser !== null){
      return (
        <Account>
          <Dropdown onToggle={(isOpen) => setDropdownOpen(isOpen)}>
            <Dropdown.Toggle
              variant="text-dark"
              id="dropdown-basic"
              size="lg"
              bsPrefix
              className="btn-icon-only"
              style={{ borderColor: dropdownOpen ? 'transparent' : 'transparent', color: dropdownOpen ? 'black' : 'teal' }}
            >
            <AccountIcon style={{fontSize:35}}/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item disabled>{user.currentUser.username}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/" onClick={disconnect}>Se Déconnecter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Account>
      )
    }
    else{
      return (
        <>
          <StyledLink to="/register">
            <MenuItem>S'INSCRIRE</MenuItem>
          </StyledLink>
          <StyledLink to="/login">
            <MenuItem>SE CONNECTER</MenuItem>
          </StyledLink>
        </>
    )}
  }

  return (
    <Container className='shadow-sm'>
      <Wrapper>
        <Left>
          <StyledLink to={`/`}>
            <Logo>
              <Img className='ms-3' src={image1} alt="Logo" />
              <div style={{fontFamily:"Roboto Condensed", color:'teal', marginLeft:"15px",padding:"0"}}>
              <h5 style={{fontWeight:'800', margin:'0'}}>FOOTKITS</h5>
              <h5 style={{fontSize:'15px', margin:'0'}}>PORTEZ LA PASSION SUR VOUS</h5>
              </div>
            </Logo>
          </StyledLink>
        </Left>
        <Center>
          {/* dropdown de recherche*/}
          <Dropdown >
          <Dropdown.Toggle
                variant="text-dark"
                id="dropdown-basic"
                drop='down-centered'
                size="lg"
                bsPrefix
                className="btn-icon-only"
                style={{ borderColor: dropdownOpen ? 'transparent' : 'transparent'}}
              >
              <SearchContainer style={{width:"140%"}}>
              <Input placeholder="Rechercher" onChange={handleChange}/>
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
              </SearchContainer>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{width:"100%"}}>
                {searched.map((product) =>  <Dropdown.Item><StyledLink to={`/product/${product._id}`}>{product.title}</StyledLink></Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
        </Center>
        <Right>
          { Login() }
          <StyledLink to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartIcon style={{fontSize:35,color:"teal"}} />
            </Badge>
          </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
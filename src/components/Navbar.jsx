import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import styled from "styled-components";
import { Badge } from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image1 from '../IMG/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";

const Img = styled.img`
  height: 30%;
  width: 40%;
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
  margin-button: 20px;
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
  dis
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const disconnect = () => {
    dispatch(logout());
  }

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
            <Img src={image1} alt="Logo" />
          </StyledLink>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Rechercher" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
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
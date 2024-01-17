import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import styled from "styled-components";
import starsImage from '../IMG/stars.jpg';
import { useNavigate } from "react-router-dom";

const Container = styled.div`

  font-family: 'Lato', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e0ebff;
  align-items: center;
  justify-content: center;
  text-align: center;
  `;
const ErreurText = styled.h1`
  font-size: 180px;
  background-clip: text;
  color: transparent;
  background-image: url(${starsImage});
  background-size: cover;
  font-weight: 3000;
`;
const H2 = styled.h2`
  font-size: 33px;
  background-clip: text;
  color: transparent;
  background-image: url(${starsImage});
  background-size: cover;
  font-weight: 1000;
  margin-left: 5px;
  margin-right: 5px;
`;
const TITLE = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const H3 = styled.h3`
  margin-bottom: 30px;
  font-weight: 600;
`;

const BUTTON = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  background-clip: border-box;
  background-image: url(${starsImage});
  background-size: cover;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 800;
  cursor: pointer;
  &:active {
    transform: scale(0.93);
    transition: all 0.2s ease-in-out;
  };
`;

const Erreur = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ErreurText>Oops!</ErreurText>
      <TITLE><h1>🤕</h1> <H2>  404 ... PAGE INTROUVABLE </H2> <h1>🤕</h1></TITLE>
      <H3>La page que vous cherchez a été supprimée<br/> son nom a été modifié ou elle est temporairement indisponible.</H3>
      <BUTTON onClick={() => navigate("/")}><HomeIcon style={{ fontSize: 35 }}/> Accueil</BUTTON>
    </Container>
  );
}
export default Erreur;
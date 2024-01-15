import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  font-style: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Promo! Livraison Gratuite pour toute commande supérieure à 100dt</Container>;
};

export default Announcement;
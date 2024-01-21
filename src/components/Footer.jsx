
 import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import RoomIcon from '@mui/icons-material/Room';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import { Link } from "react-router-dom";


  import styled from "styled-components";
  
  const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  `;
  
  const Container = styled.div`
    background-color: #FCFCFC;
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
  color: teal;`;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    height:100%;
   
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 10px;
    height:100%;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container className='shadow-sm'>
        <Left>
          <Logo>FOOTKITS.</Logo>
          <Desc>
          Bienvenue sur FootKits, votre destination ultime pour tous les passionnés de football ! Découvrez le parfait mélange de style, de performance et de passion pour enrichir votre expérience sur le terrain. Plongez dans l'univers FootKits et équipez-vous comme un vrai champion !
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookRoundedIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liens Utiles</Title>
          <List>
              <ListItem><StyledLink to="/">Accueil</StyledLink></ListItem>
              <ListItem><StyledLink to="/products/t-shirt">Maillots</StyledLink></ListItem>
              <ListItem><StyledLink to="/products/crampon">Crampons</StyledLink></ListItem>
              <ListItem><StyledLink to="/products/accessoire">Accessoires</StyledLink></ListItem>
              <ListItem><StyledLink to="/politics">Conditions générales</StyledLink></ListItem>
              <ListItem><StyledLink to="/favorite">Favoris</StyledLink></ListItem>
              <ListItem><StyledLink to="/suivi">Suivi de commande</StyledLink></ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contactez Nous</Title>
          <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/> Sousse , Tunisie
          </ContactItem>
          <ContactItem>
            <LocalPhoneIcon style={{marginRight:"10px"}}/> +216 52 504 784 
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> contactfootkits@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;

 import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import PinterestIcon from '@mui/icons-material/Pinterest';
  import RoomIcon from '@mui/icons-material/Room';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';


  import styled from "styled-components";
  
  
  const Container = styled.div`
    display: flex;
    margin-top: 70px;
   
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
    padding: 20px;
    height:100%;
   
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    margin-left: 120px
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
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
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
            <SocialIcon color="0441AC">
              <LinkedInIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liens Utiles</Title>
          <List>
            <ListItem>Accueil</ListItem>
            <ListItem>Mon Compte</ListItem>
            <ListItem>Maillots</ListItem>
            <ListItem>Panier</ListItem>
            <ListItem>Crampons</ListItem>
            <ListItem>Suivi de commande</ListItem>
            <ListItem>Accessoires</ListItem>
            <ListItem>Conditions générales</ListItem>
            <ListItem>Favoris</ListItem>
            <ListItem>Politique de confidentialité</ListItem>
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
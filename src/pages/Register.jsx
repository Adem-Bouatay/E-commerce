import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/564x/47/27/9a/47279a7d7cbb948a43a8847729130b5e.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  
  min-width: 80%;
  margin: 20px 10px 10px 50px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left: 26vh;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRÉER UN COMPTE</Title>
        <Form>
          <Input placeholder="Prénom" />
          <Input placeholder="Nom" />
          <Input placeholder="Nom d'utilisateur" />
          <Input placeholder="Email" />
          <Input placeholder="Mot de passe" />
          <Input placeholder="Confirmer le mot de passe" />
          <Agreement>
            En créeant un compte, Je consens au traitement de mes données personnelles conformément à la <b>Politique de Confidentialité</b>
          </Agreement>
          <Button>CRÉER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
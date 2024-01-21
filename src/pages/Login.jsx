import styled from "styled-components";
import CachedIcon from '@mui/icons-material/Cached';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
  width: 25%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-size: 20px
`;

const Password = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 20px;
  font-weight: normal;
  border: 1px solid black;
`;

const PassContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PassSpan = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: normal;
  color: grey;
  cursor: pointer;
`;

const Button = styled.button`
  width: 60%;
  border: none;
  padding: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  &:disabled {
    background-color: black;
    border: 1px solid black;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  color: black;
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`;

const LoadIcon = styled(CachedIcon)`
  @keyframes App-logo-spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  };
  animation: App-logo-spin infinite 1s linear;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  
  const handlePass = (e) => {
    setPassword(e.target.value);
    e.target.style.fontSize = "20px";
    e.target.style.fontWeight = "600";
    e.target.style.fontFamily = "arial"
  }

  return (
    <Container>
      <Wrapper>
        <Title>SE CONNECTER</Title>
        <Form>
          <Input
            placeholder="Nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
          />
          <PassContainer >
            <Password type={show ? "text" : "password"} 
                      placeholder="Mot de passe" 
                      aria-describedby="basic-addon1"  
                      onChange={handlePass}
            />
            <PassSpan class="input-group-text" id="basic-addon1" onClick={() => setShow(!show)}>
              {show?<VisibilityOffIcon/>:<VisibilityIcon/>}
            </PassSpan>
          </PassContainer>
          <center>
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching?<LoadIcon/>:"SE CONNECTER"}
          </Button>
          </center>
          {error && <Error>Something went wrong ...</Error>}
          <Link>MOT DE PASSE OUBLIÉ ?</Link>
          <Link href="/register">CRÉER UN NOUVEAU COMPTE</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
import styled from "styled-components";
import CachedIcon from '@mui/icons-material/Cached';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/apiCalls";
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
  left: 50px;
  width: 80%;
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

const Error = styled.span`
  color: red;
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

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [familyname, setFamilyname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setPassword("");
      setConfirm("");
      alert("Passwords don't match!");
    } else {
      signup(dispatch, { firstname, familyname, username,  email, password });
    }
  };
  
  const handlePass = (e) => {
    setPassword(e.target.value);
    e.target.style.fontSize = "20px";
    e.target.style.fontWeight = "600";
    e.target.style.fontFamily = "arial"
  }

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    e.target.style.fontSize = "20px";
    e.target.style.fontWeight = "600";
    e.target.style.fontFamily = "arial"
  }

  return (
    <Container>
      <Wrapper>
        <Title>CRÉER UN COMPTE</Title>
        <Form>
          <Input placeholder="Prénom" 
                 onChange={(e) => setFirstname(e.target.value)}
          />
          <Input placeholder="Nom"
                 onChange={(e) => setFamilyname(e.target.value)}
          />
          <Input placeholder="Nom d'utilisateur" 
                 onChange={(e) => setUsername(e.target.value)}
          />
          <Input placeholder="Email" 
                 onChange={(e) => setEmail(e.target.value)}
          />
          <PassContainer >
            <Password type={show1 ? "text" : "password"} 
                      placeholder="Mot de passe" 
                      aria-describedby="basic-addon1"  
                      onChange={handlePass}
            />
            <PassSpan class="input-group-text" id="basic-addon1" onClick={() => setShow1(!show1)}>
              {show1?<VisibilityOffIcon/>:<VisibilityIcon/>}
            </PassSpan>
          </PassContainer>
          <PassContainer >
            <Password type={show2 ? "text" : "password"} 
                      placeholder="Confirmer le mot de passe" 
                      aria-describedby="basic-addon2"  
                      onChange={handleConfirm}
            />
            <PassSpan class="input-group-text" id="basic-addon2" onClick={() => setShow2(!show2)}>
              {show2?<VisibilityOffIcon/>:<VisibilityIcon/>}
            </PassSpan>
          </PassContainer>
          <Agreement>
            En créeant un compte, Je consens au traitement de mes données personnelles conformément à la <b>Politique de Confidentialité</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching?<LoadIcon/>:"CRÉER"}
          </Button>
          {error && <Error>Something went wrong ...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
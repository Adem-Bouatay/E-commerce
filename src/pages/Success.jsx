import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import starsImage from '../IMG/stars.jpg';
import styled from "styled-components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://img.freepik.com/premium-vector/colorful-confetti-ribbon-falling-vector-simple-confetti-ribbon-falling-isolated-white-background-festival-elements-vector-anniversary-birthday-celebration-element_585735-369.jpg?w=1380);
`;
const Order = styled.div`
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 70%;
    border-radius: 10px;
`;

const Success = () => {
    return (
        <>
            <Navbar/>
            <Container>
            <Order className="shadow">
                <CheckCircleIcon style={{
                    color: 'teal',
                    width: '30%',
                    height: '30%',
                }}/>
                <h1>Commande validée</h1>
                <p>Vous recevrez un mail de confirmation</p>
                <a href="/"><button className="btn" style={{backgroundColor:"#208282dd", color: "white"}}>Retour à l'accueil</button></a>
            </Order> 
            </Container>           
            <Footer />         
        </>
    )
}

export default Success
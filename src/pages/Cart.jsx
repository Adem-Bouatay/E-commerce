import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { decCart, incCart, reset } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import GooglePayButton from '@google-pay/button-react';


/*const KEY = process.env.REACT_APP_STRIPE;*/


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
 
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  width: 97%;
  justify-content: space-between;
  background-color:white;
  border-radius: 8px;
  margin:5px;
  margin-bottom: 12px;
  padding: 10px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.15);
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 28%;
  border-radius: 8px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
 
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: teal;
  border-radius: 4px;
  border:none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    background-color: black;
    border-color: teal;
  };
  &:active{
    transform: scale(0.99);
    transition: transform 0.1s ease-in-out;
  };
`;
const PayButton = styled(GooglePayButton)`
  width: 100%;
  background-color: black;
  border-radius: 4px;
  border:none;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart, });
      } catch (error) {
      }};
    stripeToken && cart.total>=1 && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);

  const handleClick = (type,index) => {
    if (type === "dec") {
      console.log(cart);
      dispatch(decCart(index));
      console.log(cart);
    } else {

      dispatch(incCart(index));
    }
  };
  const handleReset = () => {
    dispatch(reset());
    navigate('/');
  }

  /*const CheckOut = () => {
    return(
      <StripeCheckout
      name="FOOTKITS"
      image="https://avatars.githubusercontent.com/u/1486366?v=4"
      billingAddress
      shippingAddress
      description={`Le total est ${cart.total} TND + ${cart.frais} TND frais de livraison`}
      amount={ cart.total < 100 ? ((cart.total + cart.frais) * 100) : (cart.total * 100) }
      token={onToken}
      stripeKey={KEY}
      >
        <Button>PAYER MAINTENANT</Button>
      </StripeCheckout>
    );
  };*/

  const GoogleCheckOut = () => {
    return (
      <div>  
        <PayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '100',
                  currencyCode: 'USD',
                   countryCode: 'US',
                },
                shippingAddressRequired: true,
              }}
              onLoadPaymentData={paymentRequest => {
                  /*console.log('Success', paymentRequest);*/
                  handleReset();  
                  navigate('/success');
                                  
              }}
              existingPaymentMethodRequired='no'
              buttonColor='black'
              buttonType='checkout'
              buttonLocale=''
              buttonSizeMode='fill'
        />
      </div>
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>TON PANIER</Title>
        <Top >
          <TopButton  onClick={() => navigate('/')}>POURSUIVRE VOS ACHATS</TopButton>
          <TopTexts style={{marginLeft:'25%',marginRight:'25%'}}>
            <TopText>Panier ({cart.quantity})</TopText>
            <TopText>Liste de souhaits (0)</TopText>
          </TopTexts>
          <GoogleCheckOut  style={{with:'50px'}}/>
        </Top>
        <Bottom>
        <Info>
        <Hr />
            {cart.products.map((product , index) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    {/*<ProductColor color={product.color} />*/}
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={() => handleClick("inc", [ product.price, index ] )} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove onClick={() => handleClick("dec",[ product.price, index ])} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} TND
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary  className='shadow-sm'>
            <SummaryTitle>VOTRE COMMANDE</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Montant total</SummaryItemText>
              <SummaryItemPrice>{cart.total} TND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frais de livraison</SummaryItemText>
              <SummaryItemPrice>{cart.frais} TND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Remise sur la livraison</SummaryItemText>
              <SummaryItemPrice>{cart.total >= 100 ? -cart.frais : 0 } TND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{ cart.total < 100 ? cart.total + cart.frais : cart.total } TND</SummaryItemPrice>
            </SummaryItem>
            <div>
              <GoogleCheckOut className='py-5'/>
              <Button className='mt-1' onClick={() => handleReset()}>ANNULER</Button>
            </div>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
import styled from "styled-components";
import React from 'react';
import image1 from '../IMG/nos marques .png'

const Img = styled.img`
  height: 400Px;
  width: 100%;
  
`;

function Marques() {
  return <Img src={image1} alt="Logo" />;
}

export default Marques;

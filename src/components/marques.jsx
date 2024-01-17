import styled from "styled-components";
import React from 'react';
import image1 from '../IMG/nos marques .png'

const Img = styled.img`
  height: 100%;
  width: 100%;
  margin-button:0px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-top: 20px;
  margin-left:20px;
`;

function Marques() {
  return (
    <div>
      <Title>NOS MARQUES:</Title>
      <Img src={image1} alt="Logo" />
    </div>
  );
}

export default Marques;

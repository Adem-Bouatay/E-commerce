import styled from "styled-components";
import React from 'react';
import image1 from '../IMG/nos marques .png'

const Img = styled.img`
  height: 100%;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-top: 20px;
  margin-left:20px;
`;

function Marques() {
  return (
    <div style={{marginTop: '30px'}}>
      <Title>Nos marques:</Title>
      <Img src={image1} alt="Logo" />
    </div>
  );
}

export default Marques;

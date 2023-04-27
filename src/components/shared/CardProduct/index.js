import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dcdcd8;
  margin-bottom: 10px;
  padding: 10px;
  border: 0.5px solid black;
  border-radius: 7px;
  width: 25vw;
  @media (max-width: 768px) {
    width: 50vw;
  }

  p { display: none; }

  img {
    width: 150px; 
    height: 150px;
    border-radius: 20px;
  }

  a {
    border: 1px solid transparent;
    background-color: grey;
    border-radius: 4px;
    color: white;
    padding: 5px;
    text-decoration: none;
  }

`;

export default function Card({ id, imagem, name, price, disponibility, link }) {
  return (
    <Container>
      <p>{id}</p>
      <img src={imagem} alt="#" />
      <h4>{name}</h4>
      <span>R${price}</span>
      <p>Pronta Entrega: {disponibility} unid</p>
      <a href={link} >
        Acesse
      </a>
    </Container>
  );
}

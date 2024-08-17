import React, { Children } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";


const CardContainer = styled.div`
display: flex;
flex-direction: column;
background-color: white;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
padding: 16px;
`;

const CardTitle = styled.h2`
margin: 0 0 10px;
`;

interface CardProps {
   title: string;
   children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, children}) => (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        {children} 
        <Button>Ler mais</Button>
        </CardContainer>
);

export default Card;
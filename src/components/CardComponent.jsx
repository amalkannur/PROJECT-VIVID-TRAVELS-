import React from 'react';
import styled from 'styled-components';

// Styled card container
const Card = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  margin:auto;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Styled header (image or icon)
const CardImage = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

// Styled content container
const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
`;

// Styled title text
const CardTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

// Styled description text
const CardDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
  line-height: 1.5;
  flex-grow: 1;
`;

// Styled footer with a button
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Styled button
const Button = styled.button`
  background-color: #4F75B4;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #35668A;
  }
`;

const CardComponent = ({ image, title, description }) => {
  return (
    <Card>
      <CardImage image={image} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <Button>Learn More</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

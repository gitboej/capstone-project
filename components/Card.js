import styled from "styled-components";

const CardContainer = styled.li`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;
  margin: 24px;
  list-style-type: none;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 16px;
`;

export default function Card({ name, price }) {
  return (
    <CardContainer>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{price}</CardDescription>
    </CardContainer>
  );
}

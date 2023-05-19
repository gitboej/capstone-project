import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>CryptoCrest</Title>
    </HeaderContainer>
  );
}

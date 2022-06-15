import styled from 'styled-components'

export const CategoryDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
`;

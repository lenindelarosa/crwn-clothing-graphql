import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 90%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    //font-size: min(max(12px, 2vw), 18px);
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
      width: 100%;
      font-size: min(max(10px, 0.8vw), 18px);
    }
  }
  `;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-size: min(max(10px, 2.0vw), 18px);
`;  

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;  
`;

export const Price = styled.span`
  width: 10%;  
`;

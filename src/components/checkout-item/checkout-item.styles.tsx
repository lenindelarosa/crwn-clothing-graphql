import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;  
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 95%;
    height: 100%;
  }  
`;

export const BaseSpan = styled.span`
  width: 23%;
  //font-size: min(max(15px, 1.5vw), 20px);
  font-size: min(max(10px, 2.0vw), 18px);
`

export const Quantity = styled.span`
  display: flex;
  width: 23%;
  font-size: min(max(10px, 2.0vw), 18px);
`;

export const Arrow = styled.span`
  cursor: pointer;
  font-size: min(max(10px, 2.0vw), 18px);
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const ButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

  
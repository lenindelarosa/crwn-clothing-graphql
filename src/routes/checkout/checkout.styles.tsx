import styled from 'styled-components';



export const CheckoutContainer = styled.div`
  width: 70%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media only screen 
  and (min-device-width : 200px) 
  and (max-device-width : 480px) {
    width: 90%;
  }

  h2 {
    font-size: min(max(20px, 2.5vw), 36px);
  }
`;

/* Smartphones (portrait and landscape) ----------- */


export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  align-items: center;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-size: min(max(10px, 1.8vw), 22px);

  &:last-child {
    width: 8%;
    }
`;
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: min(max(20px, 2.5vw), 36px);
`;
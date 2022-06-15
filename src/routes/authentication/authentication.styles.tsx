import styled from 'styled-components'

export const SignContainer = styled.div`
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* @media only screen 
    and (min-device-width : 200px) 
    and (max-device-width : 480px) {
        width: 90%;
  } */
`;

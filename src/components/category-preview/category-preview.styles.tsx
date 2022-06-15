import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;  
`;

export const Title = styled.span`
  margin-bottom: 25px;
  cursor: pointer;  
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  column-gap: 20px;  
  row-gap: 10px;

  @media only screen 
    and (min-device-width : 200px) 
    and (max-device-width : 780px) {
      width: 100%;
    }
`;

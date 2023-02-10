import styled from "styled-components"


export const Offerstyle = styled.div`
   width: 100%;
   
   .offer-container{
       justify-content: center;
       display:flex;
        margin-top: 2rem;
    }
    .head{
        margin: 0;
        font-family: 'Yellix';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
    }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    height: 910px;
    margin: 0;
  }
`;
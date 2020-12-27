import styled from 'styled-components'

/*
    =====================================
                Cards Section Style
    =====================================
*/


export const Cards = styled.div`
  padding: 70px 0;
`;

export const TitleWork = styled.h1`
  margin: 0 0 30px 0;
  text-transform: capitalize;
`;

export const TitleCard = styled.h3`
  text-transform: capitalize;
  color: red;
  margin-top: 20px;
`;
export const DescCard = styled.p`
  text-transform: capitalize;
`;

export const Icon = styled.i`
  color: #222;
`;

export const CardCenter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HrLine = styled.hr`
  margin: 30px 0;
  background: #ddd;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  text-align: center;
  padding: 50px 70px;
  &:nth-of-type(2){
    margin: 0 2%;
  }
`;



// @media (max-width: 767px) {
//   .cards .card-center {
//     display: flex;
//     flex-wrap: wrap;
//   }
//   .cards .card {
//     width: 48%;
//     margin: 10px 0;
//   }
//   .cards .card:nth-of-type(2) {
//     margin: 10px;
//   }
// }

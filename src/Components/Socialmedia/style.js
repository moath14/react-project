import styled from 'styled-components'

/*
    =====================================
                Social Section Style
    =====================================
*/

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
`;

export const Box = styled.div`
  padding: 50px 30px 50px 20px;
  width: 35%;
  display: flex;
  align-items: center;
  background: ${(props) => (props.className === "facebook" ? "#3b5999" : "")};
  background: ${(props) => (props.className === "twitter" ? "#55acee" : "")};
  background: ${(props) => (props.className === "pint" ? "#bd081c" : "")};
`;
// .social .facebook{
//   background: #3b5999;
// }

// .social .twitter{
//   background: #55acee
// }

// .social .pint{
//   background: #bd081c
// }

export const Icon = styled.div`
    width: 10%;
    font-size: 26px;
    color: rgb(117, 117, 117);
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 10px 23px;
    border-radius: 4px;
`;

export const TextIcon = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;





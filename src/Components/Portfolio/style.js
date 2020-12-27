import styled from 'styled-components'
/*
    =====================================
                Portfolio Section Style
    =====================================
*/

// const obj = {
//   TitlePortfolio,
//   PortfolioList,
//   Anchore,
//   Boxes,
//   Box,
//   Img
// }

export const TitlePortfolio = styled.h1`
  text-transform: capitalize;
  text-align: center;
`;

export const PortfolioList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 50px 0;
`;

export const ListItem = styled.li`
  &:hover {
    a {
        background: red;
        color: #fff;
        border-radius: 4px;
    }
  }
`;

export const Anchore = styled.a`
  text-decoration: none;
  color: #000;
  padding: 12px 20px;
  transition: 0.5s;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

export const Boxes = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap
`;

export const Box = styled.div`
  width: 25%;
  height: 225px;
  position: relative;
  overflow: hidden;
  &:hover {
    &:after {
      transform: translateY(0%);
    }
  }
  &:after {
    content: "this is text test";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 16px;
    position: absolute;
    transform: translateY(-100%);
    transition: 0.5s;
  }
`;



// .portfolio ul li:hover a {
//   background: red;
//   color: #fff;
//   border-radius: 4px;
// }



// .portfolio .boxes .box:hover:after {
//   transform: translateY(0%);
// }

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;



/* @media (max-width: 767px) {
  .portfolio .boxes {
    flex-wrap: wrap;
  }
  .portfolio .boxes .box {
    width: 50%;
  }
  .portfolio ul li a {
    font-size: 14px;
    padding: 7px 15px;
  }
} */
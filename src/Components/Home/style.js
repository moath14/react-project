import styled from 'styled-components'
/*
    =====================================
                Hero Section Style
    =====================================
*/



export const Hero = styled.div`
  background-image: url("images/flower-shop-PY7AL6H.jpg"); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  color: #fff;
  z-index: 1;
  text-align: center;
  height: calc(100vh - 71px);
  &:after{
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const FirstAddress = styled.h2`
  z-index: 2;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 40px;
`;
export const SecondAddress = styled.h4`
  z-index: 2;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 20px;
  margin: 15px 0;
`;
export const Paragraph = styled.p`
  z-index: 2;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 18px;
`;
export const Button = styled.button`
  z-index: 2;
  text-transform: capitalize;
  margin: 15px 0 0 0;
  padding: 12px 20px;
  background: red;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid red;
  transition: 0.5s;
  &:hover{
    background-color: transparent;
    color: #fff;
  }
`;

export const CenterAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;


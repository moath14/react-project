import styled from 'styled-components'


/*
    =====================================
                Creative Section Style
    =====================================
*/

export const Creative = styled.div`
  height: 550px;
  background-image: url("images/flower-shop-PY7AL6H.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
  z-index: 2;
  text-transform: capitalize;
  &:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }
`;

export const CreativeFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  height: 100%;
`;

export const Title = styled.h1`
  color: red;
  font-size: 35px;
  margin: 15px 0;
  z-index: 3;
  width: 35%;
`;

export const TitleTwo = styled.h3`
  font-size: 25px;
  z-index: 3;
  width: 35%;
`;

export const Paragraph = styled.p`
  z-index: 3;
  width: 35%;
  font-size: 16px;
  line-height: 24px;
`;

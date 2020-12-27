import styled from 'styled-components';
import {Link} from 'react-router-dom'
/*
    =====================================
                Header Style
    =====================================
*/



export const Header = styled.header`
  border-bottom: 1px solid #222;
  padding: 20px 0;
`;

export const NavbarLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoText = styled.h2`
  text-transform: capitalize;
  font-size: 25px;
`;

export const Input = styled.input`display: none;`;



export const Label = styled.label`
  display: none;
  cursor: pointer;
`;

export const Span = styled.span`
  width: 25px;
  height: 5px;
  background-color: #d85757;
  border: 1px solid #222;
  margin: 2px;
  display: flex;
  border-radius: 3px;
`;

export const UlLink = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

// export const Anchor = styled.a`
//   color: #222;
//   text-decoration: none;
//   text-transform: capitalize;
//   font-weight: bold;
//   padding: 10px 15px;
//   transition: 0.5s;
//   &:hover{
//     color: red;
//   }
// `;

export const Anchor = styled(Link)`
    color: #222;
    text-decoration: none;
    text-transform: capitalize;
    font-weight: bold;
    padding: 10px 15px;
    transition: 0.5s;
    &:hover{
      color: red;
    }
`;





/* Media for Navbar Style */

// @media (max-width: 991px) {
//   header .navbar,
//   header .navbar .ul-link {
//     flex-direction: column;
//   }
//   header .navbar {
//     align-items: flex-start;
//   }
//   header .navbar .logo {
//     justify-content: space-between;
//     display: flex;
//     width: 100%;
//     align-items: center;
//   }
//   header .navbar .logo .nav label {
//     display: block;
//   }

//   header .navbar .ul-link {
//     margin-top: 20px;
//     align-self: center;
//     display: none;
//     transition: 0.5s;
//     width: 100%;
//   }

//   header .navbar .ul-link .link-item {
//     align-self: center;
//     width: 100%;
//   }
//   header .navbar .ul-link .link-item a {
//     padding: 10px 20px;
//     display: block;
//     text-align: center;
//   }
// }

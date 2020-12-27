import styled from "styled-components";
/*
    =====================================
                Profile Section Style
    =====================================
*/

export const ProfileSection = styled.div`
  text-transform: capitalize;
  padding: 70px 0;
`;

export const Flexable = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SecProfile = styled.div`
  width: 50%;
`;

export const TitleProfile = styled.h1`
  margin: 30px 0;
`;
export const TitleSkills = styled.h1`
  margin: 30px 0;
`;
export const SecSkills = styled.div`
  width: 50%;
`;

export const InfoProfile = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 16px;
`;

export const First = styled.div`
  padding: 10px 0;
  transition: 0.5s;
  width: 20%;
`;

export const Last = styled.div`
  padding: 10px 0;
  transition: 0.5s;
  &:hover {
    color: red;
  }
`;

export const SkillsParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const Progress = styled.div`
  margin: 30px 0 0 0;
`;

export const Progs = styled.div`
  margin-bottom: 20px;
`;

export const InfoProgs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const FillProg = styled.div`
  width: 100%;
  height: 15px;
  position: relative;
  background-color: #ccc;
  border-radius: 4px;
`;

export const Span = styled.span`
  position: absolute;
  width: ${(props) => {
    if (props.test === 1) {
      return "90%";
    } else if (props.test === 2) {
      return "70%";
    } else if (props.test === 3) {
      return "80%";
    }
  }};
  height: 100%;
  top: 0;
  left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: red;
`;

// export const Wp = styled(Span)`
//   width: ${props => props.key === 2 ? "70%" : "100%"}
// `;
// export const Seo = styled(Span)`
//   width: ${(props) => (props.key === 3 ? "80%" : "100%")};
// `;

/* @media (max-width: 767px) {
  .flexable-profile {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile .my-profile,
  .profile .my-skills {
    width: 100%;
  }
} */

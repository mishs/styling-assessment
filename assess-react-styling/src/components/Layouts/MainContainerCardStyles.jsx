/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  border: 1.55em solid #f7f7f2;
  border-bottom-style: hidden;
  padding: 1.1em;
  min-width: 40%;
  max-width: 600px; /* 400px WIP */
`;

const MainContainerCard = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainContainerCard;

/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fffff;
  border: 1.75em solid lightgray;
  padding: 1.4em;
  min-width: 40%;
`;

const MainContainerCard = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainContainerCard;

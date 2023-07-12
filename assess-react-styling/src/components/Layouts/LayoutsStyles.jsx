/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 2px dotted black;
  margin: 0.2em;
`;

const LayoutsStyles = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LayoutsStyles;

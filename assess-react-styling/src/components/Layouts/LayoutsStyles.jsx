/* eslint-disable react/prop-types */
import styled from "styled-components";

const BorderBottom = styled.div`
  display: flex;
  margin: 0.2em;
  padding-bottom: 45px;
  margin-bottom: -10px;
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Ccircle fill='%23000000' cx='1' cy='1' r='1'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 25px;
`;

const LayoutsStyles = ({ children }) => {
  return <BorderBottom>{children}</BorderBottom>;
};

export default LayoutsStyles;

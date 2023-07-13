/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: ##181919;
  top: 17.5em;
  button {
    border: none;
    :active {
      transform: scale(0.98);
    }
  }
`;

const ControlButtons = ({ next, prev, reset }) => {
  return (
    <Wrapper>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>{reset ? "Reset" : "Next"}</button>
    </Wrapper>
  );
};

export default ControlButtons;

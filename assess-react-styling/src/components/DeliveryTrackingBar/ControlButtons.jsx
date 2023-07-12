/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: ##181919;
  top: 16em;
  button {
    border: none;
    :active {
      transform: scale(0.98);
    }
  }
`;

const ControlButtons = ({ next, prev }) => {
  return (
    <Wrapper>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </Wrapper>
  );
};

export default ControlButtons;
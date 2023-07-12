import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 20em;
  button {
    border: none;
    /* cursor: pointer; */
    /* background-color: red; */
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

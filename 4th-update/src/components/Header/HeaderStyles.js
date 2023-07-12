import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h1 span {
    color: grey;
    margin-right: 2em;
  }
`;

export const DetailsColumn = styled.div`
  line-height: 0.75;

  h2 {
    color: black;
  }

  h2 + h2 {
    margin-left: 8%;
    color: grey;
  }
`;

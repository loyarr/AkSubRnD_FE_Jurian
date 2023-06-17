import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin: 0;
  }

  div {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
`
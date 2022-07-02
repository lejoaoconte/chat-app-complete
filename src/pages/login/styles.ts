import styled from "styled-components";

export const Container = styled.div`
  @keyframes imageOpen {
    0% {
      width: 0px;
    }
    100% {
      width: 200px;
    }
  }

  @keyframes buttonOpen {
    0% {
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--gray-100);

  div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img.logo {
    width: 200px;
    margin-bottom: 1rem;
    animation: imageOpen 1.2s normal;
  }

  button {
    width: 150px;
    height: 50px;
    border: 0;
    color: var(--white);
    border-radius: 0.25rem;
    background: var(--secondary);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    visibility: hidden;

    animation: 3s 1s buttonOpen;
    animation-fill-mode: forwards;

    transition: background 1s;
    transition: width 1s;

    &:hover {
      background: var(--secondary-dark);
      width: 180px;
    }

    img {
      width: 1.5rem;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

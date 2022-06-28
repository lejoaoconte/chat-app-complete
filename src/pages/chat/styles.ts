import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ChatComponent = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  overflow-y: scroll;
`;

export const SendMessage = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px dashed var(--gray-850);
  padding: 0 2rem;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100% !important;

    input {
      width: 100%;
      margin: 0;
    }

    button {
      width: 50px;
      margin-left: 2rem;
    }
  }
`;

export const MessageArea = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--primary-dark);
  color: var(--white);
  width: 300px;

  &:first-child {
    margin-top: 4rem;
  }

  &.userMessage {
    margin-left: auto;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;

    img {
      width: 2rem;
      border-radius: 100%;
      margin-right: 0.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  span {
    font-size: 1.3rem;
  }
`;

import { signOut } from "next-auth/react";
import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.open ? "250px" : "80px")};
  background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  transition: 1s width linear;

  div {
    padding: 1rem 0.25rem;
    width: 100%;

    .buttons {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .contacts {
    flex: 1;
    width: 100%;
    height: 100%;
    background: green;
  }
`;

export function Siderbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container open={open}>
      <div>
        <button className="buttons" onClick={() => setOpen(!open)}>
          click
        </button>
      </div>
      <div className="contacts"></div>
      <div>
        <button className="signout" onClick={() => signOut()}>
          sair
        </button>
      </div>
    </Container>
  );
}

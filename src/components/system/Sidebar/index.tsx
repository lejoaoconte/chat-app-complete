import { signOut } from "next-auth/react";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

const Container = styled.div`
  width: 80px;
  background: var(--primary);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  div {
    padding: 1rem 0.25rem;
    width: 100%;
  }

  .signout {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: none;
      background: none;
      width: fit-content;
      padding: 1rem;
    }
  }

  .contacts {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;

export function Siderbar() {
  return (
    <Container>
      <div className="contacts"></div>
      <div className="signout">
        <button className="signout" onClick={() => signOut()}>
          <FaSignOutAlt size="24px" color="#ffffff" />
        </button>
      </div>
    </Container>
  );
}

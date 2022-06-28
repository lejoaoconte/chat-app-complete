import styled from "styled-components";

const Container = styled.div`
  @keyframes loadingRingsKeyFrame {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div.loadingRings {
    display: inline-block;
    width: 100px;
    height: 100px;

    &::after {
      content: " ";
      display: block;
      width: 80px;
      height: 80px;
      margin: 10px;
      border-radius: 100%;
      border: 9px solid #000;
      border-color: #000 transparent;
      animation: loadingRingsKeyFrame 1.2s linear infinite;
    }
  }
`;

export function Loading() {
  return (
    <Container>
      <div className="loadingRings"></div>
    </Container>
  );
}

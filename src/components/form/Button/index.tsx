import styled from "styled-components";
import { IconType } from "react-icons";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  loading: boolean;
  Icon?: IconType;
}

const ButtonComponent = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  background: var(--primary);
  color: var(--white);
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin: 1rem 0;

  transition: 1s filter;

  &:hover {
    filter: brightness(0.7);
  }
`;

const Loading = styled.div`
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  width: 25px;
  height: 25px;

  &::after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.25rem solid #fff;
    border-color: #fff #fff transparent transparent;
    animation: lds-dual-ring 1s linear infinite;
  }
`;

export function Button({ text, type, onClick, loading, Icon }: ButtonProps) {
  return (
    <ButtonComponent
      onClick={onClick !== undefined ? onClick : () => {}}
      type={type}
    >
      {loading ? <Loading /> : Icon !== undefined ? <Icon /> : text}
    </ButtonComponent>
  );
}

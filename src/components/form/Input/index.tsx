import styled from "styled-components";

import { IconType } from "react-icons/lib";

interface InputComponentProps {
  value: string;
  setValue: (value: string) => void;
  Icon?: IconType;
  placeholder: string;
}

const InputComponent = styled.label`
  width: 100%;
  height: 45px;
  border-bottom: 1px solid var(--gray-800);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  box-shadow: 0;

  transition: border-bottom 1s;

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--primary);
  }

  input {
    margin: 0 1rem;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: 0;
    &:focus {
      border: none;
    }
  }
`;

export function Input({
  Icon,
  setValue,
  value,
  placeholder,
}: InputComponentProps) {
  return (
    <InputComponent>
      {Icon !== undefined && <Icon size={24} color="#589fff" />}
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </InputComponent>
  );
}

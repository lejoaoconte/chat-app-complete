import { FormEvent, ReactNode } from "react";

import styled from "styled-components";

interface FormAreaComponentProps {
  width: string;
  padding: string;
  background: string;
  borderRadius: string;
  border: string;
}

interface FormAreaProps extends FormAreaComponentProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<EventTarget>) => void;
}

const FormAreaComponent = styled.form<FormAreaComponentProps>`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

export function FormArea({
  children,
  background,
  border,
  borderRadius,
  onSubmit,
  padding,
  width,
}: FormAreaProps) {
  return (
    <FormAreaComponent
      background={background}
      width={width}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      onSubmit={onSubmit}
    >
      {children}
    </FormAreaComponent>
  );
}

import React, { useEffect, useRef, useState } from "react";

import io from "socket.io-client";

//import { useAppSelector } from "redux/hooks/useAppSelector";
import { ChatComponent, Container, MessageArea, SendMessage } from "./styles";
import { Button } from "components/form/Button";

import { FaPaperPlane } from "react-icons/fa";
import { Input } from "components/form/Input";

import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Siderbar } from "components/system/Sidebar";

import { SocketIoProps, UserProps } from "pages/api/socket";

interface PageProps {
  user: UserProps;
}

export default function Chat({ user }: PageProps) {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<any>([]);
  const socketRef = useRef<any>();

  useEffect(() => {
    socketInitializer();
  }, [chat]);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socketRef.current = io();

    socketRef.current.on(
      "message",
      ({ name, message, image, email }: SocketIoProps) => {
        setChat([...chat, { name, message, image, email }]);
      }
    );

    return () => socketRef.current?.disconnect();
  };

  function onMessageSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = user.name;
    const image = user.image;
    socketRef.current?.emit("message", { name, message, image });
    e.preventDefault();
    setMessage("");
  }

  function renderChatFunction() {
    return (
      <div>
        {chat.map(({ name, message, image }: SocketIoProps, index: number) => (
          <MessageArea
            className={name === user.name ? "userMessage" : ""}
            key={index}
          >
            <div>
              <img src={image} alt={name} />
              <p>{name}:</p>
            </div>
            <span>{message}</span>
          </MessageArea>
        ))}
      </div>
    );
  }

  return (
    <>
      <Siderbar />
      <Container>
        <ChatComponent>{renderChatFunction()}</ChatComponent>
        <SendMessage>
          <form onSubmit={onMessageSubmit}>
            <Input
              setValue={setMessage}
              value={message}
              placeholder="Digite sua mensagem..."
            />
            <Button loading={false} text="" Icon={FaPaperPlane} type="submit" />
          </form>
        </SendMessage>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: session,
  };
};

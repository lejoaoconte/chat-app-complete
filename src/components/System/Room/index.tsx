import React, { useEffect, useState } from "react";

import { FaPaperPlane } from "react-icons/fa";

import { ChatArea, ChatComponent, SendMessage, MessageArea } from "./styles";

import { Button } from "components/form/Button";
import { Input } from "components/form/Input";

import { SocketIoProps, UserProps } from "pages/api/socket";

interface ChatProps {
  socket: any;
  user: UserProps;
  room: string;
}

export function Room({ socket, user, room }: ChatProps) {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<any>([]);

  useEffect(() => {
    socket.on(
      "receive_message",
      ({ name, message, image, email }: SocketIoProps) => {
        setChat([...chat, { name, message, image, email }]);
      }
    );
  }, [chat]);

  function onMessageSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = user.name;
    const image = user.image;
    const email = user.email;
    setChat([...chat, { name, message, image, email }]);
    socket.emit("send_message", { name, message, image, email }, room);
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
    <ChatArea>
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
    </ChatArea>
  );
}

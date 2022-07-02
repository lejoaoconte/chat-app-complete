import React, { useEffect, useRef, useState } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react";

import io from "socket.io-client";

import { Container } from "./styles";

import { UserProps } from "pages/api/socket";

import { Room } from "components/system/Room";
import { Siderbar } from "components/system/Sidebar";
import { Input } from "components/form/Input";
import { Button } from "components/form/Button";

import { FaUserFriends } from "react-icons/fa";
import { FormArea } from "components/form/formArea";

interface PageProps {
  user: UserProps;
}

export default function Chat({ user }: PageProps) {
  const [room, setRoom] = useState<string>("");
  const [showChat, setShowChat] = useState<boolean>(false);
  const socketRef = useRef<any>();

  useEffect(() => {
    socketInitializer();
  }, []);

  async function socketInitializer() {
    await fetch("/api/socket");
    socketRef.current = io();
    return () => socketRef.current?.disconnect();
  }

  function joinRoom() {
    if (room !== "") {
      socketRef.current?.emit("join_room", room);
      setShowChat(true);
    }
  }

  return (
    <>
      <Head>
        <title>Chat Geral | chat.group</title>
      </Head>
      <Container>
        <Siderbar />
        {!showChat ? (
          <FormArea
            background="none"
            border="none"
            borderRadius="0px"
            onSubmit={joinRoom}
            padding="0px"
            width="320px"
          >
            <Input
              setValue={setRoom}
              value={room}
              placeholder="Digite o nome da sala..."
            />
            <Button
              loading={false}
              text=""
              Icon={FaUserFriends}
              type="submit"
            />
          </FormArea>
        ) : (
          <Room socket={socketRef.current} user={user} room={room} />
        )}
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

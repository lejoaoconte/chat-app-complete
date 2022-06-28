import { GetServerSideProps } from "next";
import Head from "next/head";

import { getSession, signIn } from "next-auth/react";

import { Container } from "./styles";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | chat.group</title>
      </Head>
      <Container>
        <div>
          <img className="logo" src="/logo.svg" alt="logo" />
          <button onClick={() => signIn("google")}>
            <span>Login com</span> <img src="/google.svg" alt="google" />
          </button>
        </div>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/chat",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

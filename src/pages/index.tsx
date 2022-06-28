import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Loading } from "components/system/Loading";

export default function Home() {
  return <Loading />;
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

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

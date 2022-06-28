import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Siderbar } from "components/System/Sidebar";

interface UserProps {
  email: string;
  image: string;
  name: string;
}

interface PageProps {
  user: UserProps;
}

export default function Chat({ user }: PageProps) {
  return (
    <>
      <Siderbar />
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

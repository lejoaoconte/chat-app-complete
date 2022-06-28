import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session({ session }): Promise<Session> {
      return session;
    },
    async signIn({ user }): Promise<boolean> {
      const { email } = user;
      console.log(email);
      return true;
    },
  },
});

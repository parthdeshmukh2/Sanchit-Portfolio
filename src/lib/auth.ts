import connectToDatabase from "@/database/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/users";
import bcrypt from "bcryptjs";

type Credential = {
  username: string;
  password: string;
  role?: string;
};

export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Enter Email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials: Credential) {
        const db = await connectToDatabase();
        const user = await db
          .collection("users")
          .findOne({ username: credentials.username });

        if (!user) {
          console.error("No user found with the provided credentials");
          return null;
        }
        console.log(user, "user");
        return {
          id: user._id.toString(),
          name: user.username,
          email: user.username,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
  pages : 
};

export default NEXT_AUTH_CONFIG;

import { NEXT_AUTH_CONFIG } from "../lib/auth";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}
export default async function Home() {
  const session = await getUser();

  return (
    <>
      {session?.userName ? "Something great is going to build..." : "Yo"}
      {JSON.stringify(session)}
    </>
  );
}

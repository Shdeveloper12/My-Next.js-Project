import Image from "next/image";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
  <div className="text-center text-4xl mt-12">
    <h1>Welcome to My Next.js App</h1>

    <UserInfo></UserInfo>
    <p className="mt-4 text-lg">Session: {JSON.stringify(session)}</p>

  </div>
  );
}

import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full ">
          <button
            onClick={() => signIn("google")}
            className="bg-white text-black p-2 px-4 rounded-sm"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex">
        <Nav />
        <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
          Logged in as {session && session.user && session.user.email}
        </div>
      </div>
    );
  }
}
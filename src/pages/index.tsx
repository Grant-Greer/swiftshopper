import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        Hello, <b>{session?.user?.name}</b>
      </div>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
        <img
          src={session?.user?.image ?? undefined}
          className="w-6 h-6 rounded-lg"
        />
      </div>
      <span className="px-2">{session?.user?.name}</span>
    </Layout>
  );
}

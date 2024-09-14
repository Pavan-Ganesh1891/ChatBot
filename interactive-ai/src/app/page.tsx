import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Innteractive AI logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Interactive AI
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent business-model app using AI integration, built with
        OpenAI, PineCone, Next.js, Shaden UI, Clerk, and more.
      </p>
      <Button size="lg" asChild>
        <Link href="/sign-in">Open</Link>
      </Button>
    </main>
  );
}

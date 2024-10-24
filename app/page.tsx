"use client";
import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { GithubIcon } from "lucide-react";

export default function Home() {
  const code_snippet = `npx shadcn@latest add button`;
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="font-poppins text-4xl">actually ship(fast)</h1>

      <div className="mt-10 space-x-4">
        <Button className="bg-black text-white border shadow-lg p-5 hover:bg-black">
          <GithubIcon />
          <p>Repo</p>
        </Button>
        <Button className="bg-black text-white border shadow-lg p-5 hover:bg-black">
          <TwitterLogoIcon />
          <p>Follow</p>
        </Button>
      </div>
      <div className="mt-10">
        <CodeBlock code={code_snippet} />
      </div>
      <p className="mt-10   text-sm">
        This is a Nextjs + Supabase boilerplate, come on now start shipping 🚀
      </p>
    </div>
  );
}

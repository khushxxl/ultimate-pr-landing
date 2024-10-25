"use client";

import { CodeBlock } from "@/components/code-block";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/lib/check-envs";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { GithubIcon } from "lucide-react";

export default function Home() {
  const code_snippet = `git clone https://github.com/khushxxl/boilerplate-nextjs.git`;

  const openInVSCode = () => {
    const repoUrl = "https://github.com/khushxxl/boilerplate-nextjs";
    const vscodeUrl = `vscode://vscode.git/clone?url=${repoUrl}`;
    window.open(vscodeUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="font-poppins text-4xl">actually ship(fast)</h1>

      <div className="mt-10 space-x-4 items-center">
        <Button
          className="bg-black text-white border shadow-lg p-5 hover:bg-black"
          onClick={() =>
            window.open(
              "https://github.com/khushxxl/boilerplate-nextjs",
              "_blank"
            )
          }
        >
          <GithubIcon />
          <p>Repo</p>
        </Button>
        <Button
          onClick={() => window.open("https://x.com/khushaal_04", "_blank")}
          className="bg-black text-white border shadow-lg p-5 hover:bg-black"
        >
          <TwitterLogoIcon />
          <p>Follow</p>
        </Button>
      </div>
      <div className="mt-10">
        <CodeBlock code={code_snippet} />
      </div>

      <Button
        onClick={openInVSCode}
        className="bg-black text-white border-2 shadow-xl p-5 hover:bg-black mt-5"
      >
        Open in VS Code
      </Button>
      <p className="mt-10 text-sm">
        This is a Nextjs + Supabase boilerplate, come on now start shipping 🚀
      </p>

      <div className="flex space-x-4 items-center mt-5 text-sm">
        <p>✅ Authentication</p>
        <p>✅ DB CRUD Actions</p>
        <p>✅ Stripe Payments</p>
      </div>

      <h1 className="mt-20">
        DB Status:{" "}
        {hasEnvVars
          ? "Successfully Connected to DB ✅"
          : "Your DB URL or ANON Key are missing ❌"}
      </h1>
    </div>
  );
}

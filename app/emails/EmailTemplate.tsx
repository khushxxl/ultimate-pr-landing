import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function EmailTemplate({ buttonText }: { buttonText: string }) {
  return (
    <Html>
      <Button
        href="https://boilerplate-nextjs-delta.vercel.app/"
        style={{ background: "#111", color: "white", padding: "12px 20px" }}
      >
        <p style={{ color: "white" }}>{buttonText}</p>
      </Button>
    </Html>
  );
}

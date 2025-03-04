"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggler } from "./dark-mode-toggler";
import Link from "next/link";
import { getAuthenticatedUser, signoutUser } from "@/lib/db/db.actions";
import Image from "next/image";
import Logo from "@/assets/logo.png";

function Navbar() {
  const [user, setUser] = useState<any>(null);

  console.log(user);

  const fetchUser = async () => {
    try {
      const res = await getAuthenticatedUser();

      setUser(res);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signoutUser();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="top-0 border-b border-white/10 sticky z-50 flex justify-evenly items-center p-5 px-10 bg-black">
      <div>
        <Link href="/">
          <Image src={Logo} alt="logo" width={40} height={40} />
        </Link>
      </div>

      <div>
        <p className="text-white text-2xl font-bold">Ultimate PR</p>
      </div>
    </div>
  );
}

export default Navbar;

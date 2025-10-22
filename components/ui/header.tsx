import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <Button asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

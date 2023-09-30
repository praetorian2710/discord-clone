import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs/app-beta";
export default function Home() {
  return (
    <div className="">
      {/* provides with the signout facility button and the route which needs to be redirected to after signout */}
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}

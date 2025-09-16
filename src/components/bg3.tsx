import React from "react";
import { Meteors } from "@/components/ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
        <Meteors number={100} />
    </div>
  );
}
"use client";

import { usePathname } from "next/navigation";

import routes from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 flex">
      {routes.map(({ label, href, icon: Icon }, i) => (
        <a
          href={href}
          title={label}
          key={i}
          className={cn(
            "flex-1 border-t-4 border-current bg-primary-foreground p-4 text-primary transition-colors",
            pathname !== href && "opacity-40 grayscale",
          )}
        >
          <Icon className="mx-auto" size="1.5rem" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}

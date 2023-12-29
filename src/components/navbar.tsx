import { PiggyBank, QrCode, Trophy } from "lucide-react";

export default function Navbar() {
  const links = [
    { label: "Prizes", href: "/prizes", icon: Trophy },
    { label: "QR Code", href: "/", icon: QrCode },
    { label: "Points", href: "/points", icon: PiggyBank },
  ];

  return (
    <nav className="sticky bottom-0 flex">
      {links.map(({ label, href, icon: Icon }, i) => (
        <a
          href={href}
          title={label}
          key={i}
          className="flex-1 border-t-4 border-current bg-primary-foreground p-4 text-primary transition-colors"
        >
          <Icon className="mx-auto" size="1.5rem" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}

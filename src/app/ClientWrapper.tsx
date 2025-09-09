// app/ClientWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import "./utils/patchRemoveChild"; // keep your patch import here (optional)

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "root";
  // The key on this wrapper forces React to remount children on route change
  return <div key={pathname} className="ba-wrapper">{children}</div>;
}

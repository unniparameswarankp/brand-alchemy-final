"use client";

import { useEffect } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const oldRemoveChild = Node.prototype.removeChild;

    Node.prototype.removeChild = function <T extends Node>(child: T): T {
      try {
        return oldRemoveChild.call(this, child) as T;
      } catch {
        return child; // Fallback, ensures type safety
      }
    };

    // Cleanup to restore original function on unmount
    return () => {
      Node.prototype.removeChild = oldRemoveChild;
    };
  }, []);

  return <>{children}</>;
}

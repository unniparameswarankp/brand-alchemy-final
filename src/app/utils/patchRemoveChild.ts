"use client";

if (typeof window !== "undefined") {
  const oldRemoveChild = Node.prototype.removeChild;

  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    try {
      return oldRemoveChild.call(this, child) as T;
    } catch {
      console.error("removeChild error on:", this, child);
      return child;
    }
  };
}

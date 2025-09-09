
// if (typeof window !== "undefined") {
//   const oldRemoveChild = Node.prototype.removeChild;

//   Node.prototype.removeChild = function (child) {
//     try {
//       return oldRemoveChild.call(this, child);
//     } catch {
//       // 👇 ignore the "not a child" error silently
//       return child;
//     }
//   };
// }


// src/app/utils/patchRemoveChild.ts
if (typeof window !== "undefined") {
  const oldRemoveChild = Node.prototype.removeChild;

  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    try {
      return oldRemoveChild.call(this, child) as T;
    } catch {
      // ignored intentionally
      return child;
    }
  };
}

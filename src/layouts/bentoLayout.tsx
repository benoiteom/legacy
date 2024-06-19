import React from "react";

export default function BentoLayout({ children }: { children: React.ReactNode[] }) {
  console.log('filteredChildren', children)

  return (
    <div className="bento">
      {children[0]}
    </div>
  );
}

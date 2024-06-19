import React from "react";

export default function Button({ color, icon, label, borderRadius = 999, onClick }: { color: string, icon?: React.ReactNode, label?: string, borderRadius?: number, onClick?: () => void }) {
  return (
    <button className="button" style={{ borderColor: color, borderRadius }} onClick={onClick}>
      {icon}
      <span className="button-label" style={{ color }}>{label}</span>
    </button>
  );
}

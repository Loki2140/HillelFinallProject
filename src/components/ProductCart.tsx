import React from "react";

interface productCartProps {
  width: string;
  height?: string;
  children?: React.ReactNode;
}

export default function ProductCart({
  width,
  height,
  children
}: productCartProps) {
  return <div style={{ width, height, background: "grey" }}>{children}</div>;
}

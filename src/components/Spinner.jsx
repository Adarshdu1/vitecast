import React from "react";
import { Rolling } from "react-loading-io";
export default function Spinner() {
  return (
    <div className="flex justify-center h-screen items-center">
      <Rolling color="gray" size={100} />
    </div>
  );
}

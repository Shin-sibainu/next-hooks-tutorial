import React from "react";
import { useFormStatus } from "react-dom";

const IncrementButton = () => {
  const { pending, data } = useFormStatus();

  return (
    <div>
      <button
        className={`px-4 py-2 border-2 border-red-400 rounded-md ${
          pending && "border-green-400"
        }`}
        disabled={pending}
        name="increment"
      >
        Increment
      </button>
    </div>
  );
};

export default IncrementButton;

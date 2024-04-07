"use client";

import { useFormState, useFormStatus } from "react-dom";
import { formAction, increment } from "./actions";
import UsernameForm from "./UsernameForm";
import IncrementButton from "./IncrementButton";

// const formAction = async () => {
//   "use server";
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("server action");
// };

export default function Home() {
  const [state, formAction] = useFormState(increment, 0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction}>
        {/* <UsernameForm /> */}
        {/* <button className="px-4 py-2 border-2 border-red-400 rounded-md">
          Increment
        </button> */}
        <IncrementButton />
        <span className="ml-2 font-medium">{state}</span>
      </form>
    </main>
  );
}

import React from "react";
import { useFormStatus } from "react-dom";

const UsernameForm = () => {
  const { pending, data } = useFormStatus();
  // console.log(pending);

  return (
    <div>
      <h3 className="mb-1 font-bold">ユーザー名を入力してください。 </h3>
      <input
        type="text"
        name="username"
        disabled={pending}
        className="px-4 py-2 border-2 rounded-md mr-2"
      />
      <button type="submit" disabled={pending}>
        送信
      </button>
      <br />
      <p>{data ? `Requesting ${data?.get("username")}...` : ""}</p>
    </div>
  );
};

export default UsernameForm;

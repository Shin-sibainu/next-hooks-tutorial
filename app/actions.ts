"use server";

export const formAction = async (previousState: number) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   console.log("server action");

  return previousState + 1;
};

export async function increment(previousState: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(previousState);
  return previousState + 1;
}

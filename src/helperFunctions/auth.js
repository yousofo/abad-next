import { fetchWithCheck } from "./dataFetching";

export async function fetchSignIn(credentials) {
  console.log("fetch SignIn");

  try {
    const data = await fetchWithCheck("/api/student/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    console.log("data");
    console.log(data);

    if (data.errors) {
      return Object.values(data.errors);
    } else {
      return data;
    }
  } catch (error) {
    console.log("error");
    console.log(error);
    if (error.errors) {
      console.log(Object.values(error.errors))
      return Object.values(error.errors);
    } else {
      return error;
    }
  }
}
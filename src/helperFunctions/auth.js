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
      console.log(Object.values(error.errors));
      return Object.values(error.errors);
    } else {
      return error;
    }
  }
}

export async function fetchRegisterUser(data) {
  console.log(data);
  try {
    const result = await fetchWithCheck("/api/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return result;
  } catch (error) {
    console.log("error sign in");
  }
}

export async function fetchResetPassword(data) {
  
  const result = await fetchWithCheck(
    `/api/student/resetPassword?mail=${data}`,
    {
      headers: {
        "Content-Type": "application/problem",
      },
    }
  );

  if(result.errors){
    let messages = Object.entries(dataToReturn.errors).map(([key, value]) => {
      return value;
    });
    return messages;
  } else {
    return dataToReturn;
  }
  
  // if (
  //   request.headers.get("Content-Type").includes("application/json") ||
  //   request.headers.get("Content-Type").includes("application/problem+json")
  // ) {
  //   const dataToReturn = await request.json();
  //   console.log(dataToReturn);
  //   if (dataToReturn.errors) {
  //     let messages = Object.entries(dataToReturn.errors).map(([key, value]) => {
  //       return value;
  //     });
  //     return messages;
  //   } else {
  //     return dataToReturn;
  //   }
  // } else {
  //   const dataToReturn = await request.text();
  //   return dataToReturn;
  // }
}

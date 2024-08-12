// sharedFunctions.js
import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import { toggleLoader, toggleSelectPaymentOptions } from "@/components/GlobalState/Features/popUpsSlice";
import { fetchUserBasket } from "@/components/GlobalState/Features/userData";
import { store } from "@/components/GlobalState/store";
import { fetchAddToBasket, fetchRegisterAttendanceCourse } from "./dataFetching";
import { toast } from "react-toastify";

// Dispatch an action
// store.dispatch(someAction(someValue));



export function isUserSignedIn() {
  const userData = store.getState().userData;

  return Boolean(userData.info);
}

export function getUserInfoFromStore() {
  const { info } = store.getState().userData;

  return info;
}

export async function buyCourseNow(courseToken) {
  if (isUserSignedIn()) {
    store.dispatch(toggleSelectPaymentOptions(courseToken));
  } else {
    store.dispatch(toggleSignIn());
  }
}

export async function handleAddToBasket(courseToken) {
  if (!isUserSignedIn()) {
    store.dispatch(toggleSignIn());
    return;
  }
  store.dispatch(toggleLoader(""));

  const user = getUserInfoFromStore();

  const result = await fetchAddToBasket({
    tokenCourse: courseToken,
    tokenStudent: user.token,
  });

  if (result.message) {
    store.dispatch(fetchUserBasket(user.token));
    toast.success(result.message);
  } else if (result.error) {
    toast.error(result.error);
  }
  store.dispatch(toggleLoader(""));
}

export async function handleRegisterAttendanceCourse(courseToken) {
  if (!isUserSignedIn()) {
    store.dispatch(toggleSignIn());
    return;
  }

  const userConfirmed = window.confirm("هل انت متأكد أنك تريد التسجيل في هذه الدورة؟");
  if (!userConfirmed) {
    return;
  }


  store.dispatch(toggleLoader(""));
  const user = getUserInfoFromStore();

  const result = await fetchRegisterAttendanceCourse({
    courseToken: courseToken,
    userToken: user.token,
  });

  if (result.message) {
    toast.success(result.message);
  } else if (result.error) {
    toast.error(result.error);
  }
  store.dispatch(toggleLoader(""));
}

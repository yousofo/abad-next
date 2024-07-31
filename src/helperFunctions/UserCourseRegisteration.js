import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import { toggleEnlistInCourse } from "@/components/GlobalState/Features/popUpsSlice";

function handleOuterRegisterCourse(user,dispatch) {
  if (user) dispatch(toggleEnlistInCourse());
  else dispatch(toggleSignIn());
}

export { handleOuterRegisterCourse }
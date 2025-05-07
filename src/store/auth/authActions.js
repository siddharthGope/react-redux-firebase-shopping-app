import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { setError, setLoading, setUser } from "./authSlice";

export const registerUser =
  (name, email, password, navigate) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      dispatch(
        setUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: name,
        })
      );
      alert("Registration successful");
      navigate("/");
    } catch (error) {
      dispatch(setError(error.message));
      console.error("Registration error", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser = (email, password, navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
    navigate("/");
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    await signOut(auth);
    dispatch(setUser(null));
    navigate("/login");
    alert("User signedOut");
  } catch (error) {
    dispatch(setError(error.message));
    console.error("Sign-out error:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

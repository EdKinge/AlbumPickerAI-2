import { doc, setDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { db, auth, firebaseConfig } from "./firebaseConfig";

export const addFeedbackDoc = async (text) => {
  const user = auth.currentUser;

  await setDoc(doc(db, "Feedback", user.uid), {
    email: user.email,
    message: text
  });

}
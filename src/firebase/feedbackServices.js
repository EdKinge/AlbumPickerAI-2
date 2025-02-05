import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebaseConfig";

export const sendFeedback = async (message) => {
  const user = auth.currentUser;
  const uid = user.uid;

  const cityRef = doc(db, 'Feedback', uid);
  setDoc(cityRef, {
    "Email": user.email,
    "Text": message
  });
}
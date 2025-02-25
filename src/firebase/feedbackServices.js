import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

export const addFeedbackDoc = async (text, timestamp) => {
  const user = auth.currentUser;
  const uid = uuidv4();

  return await setDoc(doc(db, "Feedback", uid), {
    email: user.email,
    message: text,
    createdAt: timestamp
  });

}
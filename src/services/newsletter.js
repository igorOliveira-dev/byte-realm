import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function saveEmail(email) {
  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    throw new Error("E-mail inválido.");
  }

  const q = query(collection(db, "emails"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    throw new Error("E-mail já cadastrado.");
  }

  const docRef = await addDoc(collection(db, "emails"), {
    email,
    subscribedAt: new Date().toISOString(),
  });
  return docRef.id;
}

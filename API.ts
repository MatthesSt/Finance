import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { currentUser } from "./src/router";

export interface User {
  name: string;
  id: string;
}
export interface Expense {
  date: Date;
  use: string;
  cost: number;
  user: string;
}

export async function login(email: string, password: string): Promise<boolean> {
  const auth = getAuth();
  if (await signInWithEmailAndPassword(auth, email, password)) {
    localStorage.setItem("Username", await getUsername());
    return true;
  }
  return false;
}

export async function logout(): Promise<void> {
  const auth = getAuth();
  await signOut(auth);
  currentUser.value = null;
  localStorage.removeItem("Username");
}

export async function register(email: string, password: string, username: string): Promise<void> {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(getFirestore(), "users", userCredential.user.uid), {
    email: email,
    role: "user",
    username: username,
  });
}
export async function getUsername(): Promise<string> {
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];

  const id = currentUser.value?.uid;
  const querySnapshot = await getDocs(collection(getFirestore(), "users"));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  const users = docs.map(users => ({
    ...users.data(),
    id: users.id,
  })) as User[];
  return users.filter(user => user.id == id)[0]?.name;
}

export async function addExpense(use: string, cost: number, date: string): Promise<void> {
  const id = currentUser.value?.uid;
  await addDoc(collection(getFirestore(), "expenses"), {
    user: id,
    use,
    cost,
    date,
  });
}
export async function getExpenses(): Promise<any> {
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const id = currentUser.value?.uid;
  const querySnapshot = await getDocs(collection(getFirestore(), "expenses"));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  const expenses = docs.map(d => ({
    ...d.data(),
  }));
  return expenses.filter(e => e.user == id);
}

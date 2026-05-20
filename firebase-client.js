import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEMnle34AXt1oAeJpk2Co0kTXetbIOkPk",
  authDomain: "my-work-tools-c7a5a.firebaseapp.com",
  projectId: "my-work-tools-c7a5a",
  storageBucket: "my-work-tools-c7a5a.firebasestorage.app",
  messagingSenderId: "992976651028",
  appId: "1:992976651028:web:7ecb3ee9a06d09db237801"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const firestoreCollections = Object.freeze({
  gameScores: "game_scores",
  wordcloudWords: "wordcloud_words"
});

export {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where
};

export function classroomCollection(collectionName) {
  return collection(db, collectionName);
}

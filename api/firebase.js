import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where
} from "firebase/firestore/lite"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2l8fTHhVSzf7oCPB4KMGfJYPmyRVkd8g",
  authDomain: "vanlife-165.firebaseapp.com",
  projectId: "vanlife-165",
  storageBucket: "vanlife-165.appspot.com",
  messagingSenderId: "118514498689",
  appId: "1:118514498689:web:a6e4bd1221bf2f855c6180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getAllVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    console.log(dataArr)
    return dataArr
  }
  
  export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
      ...vanSnapshot.data(),
      id: vanSnapshot.id
    }
  }
  
  export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", 123))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    return dataArr
  }

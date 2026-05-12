import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyApEMFz3QhWOVI_CyEJJIqB_pyXEgjRNxc",
  authDomain: "formtamu-d750c.firebaseapp.com",
  projectId: "formtamu-d750c",
  storageBucket: "formtamu-d750c.firebasestorage.app",
  messagingSenderId: "812624536603",
  appId: "1:812624536603:web:587f9d19794d42cdf584be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc
};

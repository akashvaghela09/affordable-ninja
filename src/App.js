import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { CallIcon } from './Components/CallIcon';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTls7WMrK31Zv_EQdChBHn5WE2V-IUhwQ",
  authDomain: "affordable-ninja-1337b.firebaseapp.com",
  projectId: "affordable-ninja-1337b",
  storageBucket: "affordable-ninja-1337b.appspot.com",
  messagingSenderId: "714709205240",
  appId: "1:714709205240:web:44d486fde1e2b872943b0d",
  measurementId: "G-6BEHHTDH6C"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// const db = getFirestore()

// const userRef = collection(db, "users")

// getDocs(userRef)
// .then((snapshot) => {
//   let users = []

//   // console.log(snapshot)
//   snapshot.docs.forEach(doc => {
//     users.push({...doc.data(), id: doc.id})
//   })
//   console.log(users)
// })
// .catch((err) => {
//   console.log(err)
// })

function App() {
  return (
    <div className="App bg-slate-300">
      <Header />
      <AllRoutes />
      <CallIcon />
      <Footer />
    </div>
  );
}

export default App;
